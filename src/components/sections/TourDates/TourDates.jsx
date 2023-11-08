import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton, StyledText, EventSupport } from './styles';

const songkickKey = process.env.REACT_APP_SONGKICK_KEY;
const songkickUrl = process.env.REACT_APP_SONGKICK_URL;

/** Example tour date array */

// const newDates = [
//   {
//     id: 0,
//     start: {
//       date: '2023-04-29',
//     },
//     venue: {
//       displayName: 'Teddy Rocks Festival',
//     },
//     location: {
//       city: 'Dorset',
//     },
//     uri: 'https://teddyrocks.co.uk/tickets',
//   },
// ];

const TourDates = () => {
  const { refs } = useContext(NavContext);
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${songkickUrl}${songkickKey}`);
        const data = await response.json();
        const upcomingShows = data.resultsPage.results.event.filter(event => new Date(event.start.date) > new Date());

        upcomingShows.sort((a, b) => {
          return new Date(a.start.date) - new Date(b.start.date);
        });

        upcomingShows.forEach(show => {
          if (show.performance) {
            show.performance = show.performance.filter(b => b.displayName !== 'Beauty School');
          }
        });

        setTourDates(upcomingShows);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <ContentItem header='tour' ref={refs.tickets} img='images/songkick.png' imgAlt='Powered by Songkick'>
      {tourDates.length > 0 ? (
        tourDates.map(event => (
          <Event key={event.id}>
            <EventInfo>
              <EventDate>{format(new Date(event.start.date), 'EEE do MMM, yyyy')}</EventDate>
              {event.performance ? (
                <EventSupport>
                  {event.performance.map((band, i) =>
                    band.displayName !== 'Beauty School' ? (
                      <span key={i}>
                        {band.displayName}
                        {event.performance.length > 1 && i !== event.performance.length - 1 && `, `}
                      </span>
                    ) : null
                  )}
                </EventSupport>
              ) : null}
              <EventVenue>
                {event.venue.displayName}, {event.location.city}
              </EventVenue>
            </EventInfo>
            <EventButton href={event.uri} target='_blank'>
              Tickets
            </EventButton>
          </Event>
        ))
      ) : (
        <StyledText>Check back later for upcoming shows!</StyledText>
      )}
    </ContentItem>
  );
};

export default TourDates;
