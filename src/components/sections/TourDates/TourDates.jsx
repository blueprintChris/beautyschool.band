import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import { ContentItem } from '../../common';
import { Event, EventInfo, EventDate, EventVenue, EventButton } from './styles';

const events = [
  {
    date: 'Mon 14 Mar, 2022 (w/ Trash Boat)',
    venue: 'Polar Bear Music Club, Hull',
    ticketLink: 'https://www.seetickets.com/event/trash-boat/polar-bear-music-club/2156669',
  },
  {
    date: 'Tue 15 Mar 2022 (w/ Trash Boat)',
    venue: 'The Crescent, York',
    ticketLink: 'https://www.seetickets.com/event/trash-boat/the-crescent/2156662',
  },
  {
    date: 'Wed 16 Mar 2022 (w/ Trash Boat)',
    venue: 'Corporation, Sheffield',
    ticketLink: 'https://www.corporation.org.uk/gig/2549',
  },
  {
    date: 'Sat 9th April, 2022',
    venue: 'The Key Club, Leeds',
    ticketLink: 'https://slamdunkmusic.seetickets.com/event/beauty-school/the-key-club/2161961',
  },
  {
    date: 'Fri 3rd June / Sat 4th June, 2022',
    venue: 'Slam Dunk Festival, 2022',
    ticketLink: 'https://slamdunk.seetickets.com/tour/slam-dunk-festival-2022?pre=pastbooker',
  },
];

const TourDates = () => {
  const { refs } = useContext(NavContext);
  // const [tourDates, setTourDates] = useState([]);

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
