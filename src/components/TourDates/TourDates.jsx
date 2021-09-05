import React, { useEffect, useState } from 'react';
import { Wrapper, Event, EventInfo, EventDate, EventVenue, EventButton } from './styles';

const TourDates = () => {
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api.songkick.com/api/3.0/artists/1084890/gigography.json?apikey=gzX1gYv5Sf25ENIj'
      );
      const data = await response.json();
      const upcomingShows = data.resultsPage.results.event.filter(event => new Date(event.start.date) > new Date());

      setTourDates(upcomingShows);
    })();
  }, []);

  return (
    <Wrapper>
      {tourDates.length > 1
        ? tourDates.map(event => (
            <Event key={event.id}>
              <EventInfo>
                <EventDate>{new Date(event.start.date).toDateString()}</EventDate>
                <EventVenue>{event.venue.displayName}</EventVenue>
              </EventInfo>
              <EventButton href={event.uri} target='_blank'>
                Tickets
              </EventButton>
            </Event>
          ))
        : 'No upcoming shows yet.'}
    </Wrapper>
  );
};

export default TourDates;
