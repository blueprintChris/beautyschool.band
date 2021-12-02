import React, { useContext, useEffect, useState } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton, StyledText } from './styles';

const TourDates = () => {
  const { refs } = useContext(NavContext);
  const [tourDates, setTourDates] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       'https://api.songkick.com/api/3.0/artists/1084890/gigography.json?apikey=gzX1gYv5Sf25ENIj'
  //     );
  //     const data = await response.json();
  //     const upcomingShows = data.resultsPage.results.event.filter(event => new Date(event.start.date) > new Date());
  //     setTourDates(upcomingShows);
  //   })();
  // }, []);

  return (
    // <ContentItem header='tour' ref={refs.listen} img='images/songkick.png' imgAlt='Powered by Songkick'>
    <ContentItem header='tour' ref={refs.listen}>
      <Event key='slamdunk'>
        <EventInfo>
          <EventDate>Fri 3rd June / Sat 4th June</EventDate>
          <EventVenue>Slam Dunk Festival</EventVenue>
        </EventInfo>
        <EventButton href='https://slamdunk.seetickets.com/tour/slam-dunk-festival-2022?pre=pastbooker' target='_blank'>
          Tickets
        </EventButton>
      </Event>
      {/* {tourDates.length > 1 ? (
        tourDates.map(event => (
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
      ) : (
        <StyledText>Check back later for upcoming shows!</StyledText>
      )} */}
    </ContentItem>
  );
};

export default TourDates;
