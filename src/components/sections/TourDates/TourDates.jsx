import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton, StyledText } from './styles';

const songkickKey = process.env.REACT_APP_SONGKICK_KEY;
const songkickUrl = process.env.REACT_APP_SONGKICK_URL;

const newDates = [
  {
    id: 0,
    start: {
      date: '2023-04-29',
    },
    venue: {
      displayName: 'Teddy Rocks Festival',
    },
    location: {
      city: 'Dorset',
    },
    uri: 'https://teddyrocks.co.uk/tickets',
  },
  // {
  //   id: 1,
  //   start: {
  //     date: '2023-05-30',
  //   },
  //   venue: {
  //     displayName: 'Essigrabrik',
  //   },
  //   location: {
  //     city: 'Cologne',
  //   },
  //   uri: 'https://www.eventim.de/event/less-than-jake-essigfabrik-16761224/',
  // },
  // {
  //   id: 2,
  //   start: {
  //     date: '2023-05-31',
  //   },
  //   venue: {
  //     displayName: 'Backstage Werk',
  //   },
  //   location: {
  //     city: 'Munich',
  //   },
  //   uri: 'https://www.eventim.de/event/less-than-jake-backstage-muenchen-16753516/',
  // },
  {
    id: 3,
    start: {
      date: '2023-06-03',
    },
    venue: {
      displayName: 'Slam Dunk Festival Italy',
    },
    location: {
      city: 'Rimini',
    },
    uri: 'https://www.slamdunkfestival.com/italy-tickets',
  },
  {
    id: 4,
    start: {
      date: '2023-06-09',
    },
    venue: {
      displayName: '02 Academy',
    },
    location: {
      city: 'Islington',
    },
    performance: [
      {
        displayName: 'State Champs',
      },
    ],
    uri: 'https://www.songkick.com/concerts/41077549-state-champs-at-o2-academy-islington',
  },
  {
    id: 5,
    start: {
      date: '2023-06-11',
    },
    venue: {
      displayName: 'Download Festival',
    },
    location: {
      city: 'Donnington',
    },
    uri: 'https://downloadfestival.co.uk/tickets/',
  },
  // {
  //   id: 6,
  //   start: {
  //     date: '2023-07-07',
  //   },
  //   venue: {
  //     displayName: '2000 Trees Festival',
  //   },
  //   location: {
  //     city: 'Cheltenham',
  //   },
  //   uri: 'https://2000trees.co.uk/tickets',
  // },
];

const TourDates = () => {
  const { refs } = useContext(NavContext);
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${songkickUrl}${songkickKey}`);
        const data = await response.json();
        const upcomingShows = data.resultsPage.results.event.filter(event => new Date(event.start.date) > new Date());
        console.log(upcomingShows);
        upcomingShows.push(...newDates);

        upcomingShows.sort((a, b) => {
          return new Date(a.start.date) - new Date(b.start.date);
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
                <EventVenue>
                  w/
                  {event.performance.map(band => {
                    return band.displayName !== 'Beauty School' ? <span> {band.displayName} </span> : null;
                  })}
                </EventVenue>
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
