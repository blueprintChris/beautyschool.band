import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton, StyledText } from './styles';

const songkickKey = process.env.REACT_APP_SONGKICK_KEY;
const songkickUrl = process.env.REACT_APP_SONGKICK_URL;

const TourDates = () => {
  const { refs } = useContext(NavContext);
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${songkickUrl}${songkickKey}`);
      const data = await response.json();
      const upcomingShows = data.resultsPage.results.event.filter(event => new Date(event.start.date) > new Date());
      setTourDates(upcomingShows);
    })();
  }, []);

  return (
    <ContentItem header='tour' ref={refs.tickets} img='images/songkick.png' imgAlt='Powered by Songkick'>
      {/* // <ContentItem header='tickets' ref={refs.tickets}> */}
      {/* {events.map((event, index) => (
        <Event key={index}>
          <EventInfo>
            <EventDate>{event.date}</EventDate>
            <EventVenue>{event.venue}</EventVenue>
          </EventInfo>
          <EventButton href={event.ticketLink} target='_blank'>
            Tickets
          </EventButton>
        </Event>
      ))} */}

      {tourDates.length > 1 ? (
        tourDates.map(event => (
          <Event key={event.id}>
            <EventInfo>
              <EventDate>{format(new Date(event.start.date), 'EEE do MMM, yyyy')}</EventDate>
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
