import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton, StyledText } from './styles';

const songkickKey = process.env.REACT_APP_SONGKICK_KEY;
const songkickUrl = process.env.REACT_APP_SONGKICK_URL;

const wonderYearsTourDates = [
  {
    id: 0,
    start: {
      date: '2022-11-08T19:00Z',
    },
    venue: {
      displayName: 'Electric Ballroom',
    },
    location: {
      city: 'London',
    },
    uri: 'https://www.seetickets.com/event/the-wonder-years/electric-ballroom/2386235',
  },
  {
    id: 1,
    start: {
      date: '2022-11-09T19:00Z',
    },
    venue: {
      displayName: 'O2 Academy',
    },
    location: {
      city: 'Birmingham',
    },
    uri: 'https://www.seetickets.com/event/the-wonder-years/o2-academy2-birmingham/2386236',
  },
  {
    id: 1,
    start: {
      date: '2022-11-10T19:00Z',
    },
    venue: {
      displayName: 'Engine Rooms',
    },
    location: {
      city: 'Southampton',
    },
    uri: 'https://www.seetickets.com/event/the-wonder-years/engine-rooms/2389874',
  },
  {
    id: 1,
    start: {
      date: '2022-11-12T19:00Z',
    },
    venue: {
      displayName: 'SWX',
    },
    location: {
      city: 'Bristol',
    },
    uri: 'https://www.seetickets.com/event/the-wonder-years/swx/2386595',
  },
  {
    id: 1,
    start: {
      date: '2022-11-13T19:00Z',
    },
    venue: {
      displayName: 'Manchester Academy 2',
    },
    location: {
      city: 'Manchester',
    },
    uri: 'https://www.seetickets.com/event/the-wonder-years/manchester-academy-2/2386239',
  },
  {
    id: 1,
    start: {
      date: '2022-11-14T19:00Z',
    },
    venue: {
      displayName: "Saint Luke's",
    },
    location: {
      city: 'Glasgow',
    },
    uri: 'https://www.seetickets.com/event/the-wonder-years/saint-luke-s/2389155',
  },
  {
    id: 1,
    start: {
      date: '2022-11-15T19:00Z',
    },
    venue: {
      displayName: 'Leeds University Stylus',
    },
    location: {
      city: 'Leeds',
    },
    uri: 'https://www.seetickets.com/event/the-wonder-years/leeds-university-stylus/2386602',
  },
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
        setTourDates(upcomingShows);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <ContentItem header='tour' ref={refs.tickets} img='images/songkick.png' imgAlt='Powered by Songkick'>
      {wonderYearsTourDates.length > 0 ? (
        wonderYearsTourDates.map(event => (
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
