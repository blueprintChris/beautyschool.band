import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton } from './styles';

const events = [
  {
    date: 'Mon 14th March, 2022',
    venue: 'Polar Bear Music Club, Hull (w/ Trash Boat, Modern Error)',
    ticketLink: 'https://www.seetickets.com/event/trash-boat/polar-bear-music-club/2156669',
  },
  {
    date: 'Tue 15th March, 2022',
    venue: 'The Crescent, York (w/ Trash Boat, Modern Error)',
    ticketLink: 'https://www.seetickets.com/event/trash-boat/the-crescent/2156662',
  },
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
];

// const songkickKey = process.env.REACT_APP_SONGKICK_KEY;

const TourDates = () => {
  const { refs } = useContext(NavContext);
  // const [tourDates, setTourDates] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       'https://api.songkick.com/api/3.0/artists/1084890/calendar.json?apikey=gzX1gYv5Sf25ENIj'
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     const upcomingShows = data.resultsPage.results.event.filter(event => new Date(event.start.date) > new Date());
  //     console.log(upcomingShows);
  //     setTourDates(upcomingShows);
  //   })();
  // }, []);

  return (
    // <ContentItem header='tour' ref={refs.listen} img='images/songkick.png' imgAlt='Powered by Songkick'>

    <ContentItem header='tickets' ref={refs.tickets}>
      {events.map((event, index) => (
        <Event key={index}>
          <EventInfo>
            <EventDate>{event.date}</EventDate>
            <EventVenue>{event.venue}</EventVenue>
          </EventInfo>
          <EventButton href={event.ticketLink} target='_blank'>
            Tickets
          </EventButton>
        </Event>
      ))}

      {/* {tourDates.length > 1 ? (
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
      )} */}
    </ContentItem>
  );
};

export default TourDates;
