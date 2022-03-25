import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton, StyledText } from './styles';

const events = [
  {
    date: 'Wed 16th March, 2022',
    venue: 'Corporation, Sheffield (w/ Trash Boat, Modern Error)',
    ticketLink: 'https://www.corporation.org.uk/gig/2549',
  },
  {
    date: 'Sat 9th April, 2022',
    venue: 'The Key Club, Leeds',
    ticketLink: 'https://slamdunkmusic.seetickets.com/event/beauty-school/the-key-club/2161961',
  },
  {
    date: 'Fri 3rd June / Sat 4th June, 2022',
    venue: 'Slam Dunk Festival, North - Leeds, Temple Newsam / South - Hatfield Park',
    ticketLink: 'https://slamdunk.seetickets.com/tour/slam-dunk-festival-2022?pre=pastbooker',
  },
  {
    date: 'Tue 27th Sep, 2022',
    venue: 'The Flapper, Birmingham (w/ The Dangerous Summer)',
    ticketLink: 'https://www.seetickets.com/event/the-dangerous-summer/the-flapper/2016503',
  },
  {
    date: 'Thu 29th Sep, 2022',
    venue: 'Thekla, Bristol (w/ The Dangerous Summer)',
    ticketLink: 'https://www.seetickets.com/event/the-dangerous-summer/thekla/2013614',
  },
  {
    date: 'fri 30th Sep, 2022',
    venue: 'The Key Club, Leeds (w/ The Dangerous Summer)',
    ticketLink: 'https://www.seetickets.com/event/the-dangerous-summer/the-key-club/2015033',
  },
  {
    date: 'Sat 1st Oct, 2022',
    venue: 'Think Tank?, Newcastle (w/ The Dangerous Summer)',
    ticketLink: 'https://www.seetickets.com/event/the-dangerous-summer/think-tank-/2016893',
  },
  {
    date: 'Sun 2nd Oct, 2022',
    venue: 'The Deaf Institute, Manchester (w/ The Dangerous Summer)',
    ticketLink: 'https://www.seetickets.com/event/the-dangerous-summer/the-deaf-institute/2012606',
  },
  {
    date: 'Mon 3rd Oct, 2022',
    venue: "King Tut's Wah Wah Hut, Glasgow (w/ The Dangerous Summer)",
    ticketLink:
      'https://www.ticketweb.uk/event/the-dangerous-summer-king-tuts-wah-wah-hut-tickets/11272915?pl=kingtuts&_ga=2.244202821.1994441152.1647431058-1580812645.1647431058',
  },
  {
    date: 'Tue 4th Oct, 2022',
    venue: 'Rescue Rooms, Nottingham (w/ The Dangerous Summer)',
    ticketLink: 'https://www.seetickets.com/event/the-dangerous-summer/rescue-rooms/2013615',
  },
  {
    date: 'Wed 5th Oct, 2022',
    venue: 'The Underworld, London (w/ The Dangerous Summer)',
    ticketLink: 'https://www.seetickets.com/event/the-dangerous-summer/the-underworld/2013145',
  },
];

const songkickKey = process.env.REACT_APP_SONGKICK_KEY;

const TourDates = () => {
  const { refs } = useContext(NavContext);
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.songkick.com/api/3.0/artists/1084890/calendar.json?apikey=${songkickKey}`);
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
