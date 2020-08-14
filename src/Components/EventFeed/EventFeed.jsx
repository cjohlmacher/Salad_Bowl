import React, { useState, useEffect } from 'react'
import styles from './styles'
import Filter from '../Filter'
import FilterBar from '../FilterBar'
import Event from '../Event'
import config from '../../config.js'

const EventFeed = (props) => {
  const {
    children,
  } = props;

  //Events Filter Creation

  const initialEventFilters = {
    "Outdoors": false,
    "21+": false,
    "Athletic": false,
    "Hobby": false,
    "Art": false,
    "Food": false,
  }

  const [eventFilterState, setEventFilterState] = useState(initialEventFilters)

  const changeEventFilterState = (filterName, newFilterValue) => {

    const modifiedFilterState = {
      ...eventFilterState,
      [filterName]: newFilterValue,
    }
    setEventFilterState(modifiedFilterState)
  }

  const filterEventsComponents = Object.keys(initialEventFilters).map(function (eventCategory) {

    const currentFilterValue = eventFilterState[eventCategory]


    const handleFilterClick = () => {
      changeEventFilterState(eventCategory, !currentFilterValue)
    }

    return (
      <Filter
        active={eventFilterState[eventCategory]}
        onToggleFilter={handleFilterClick}
        topic={eventCategory}
      />
    );
  });

  //Events

  //CommentBar - Events
  const [commentingEventId, setCommentingEventId] = useState(null);

  //ShareBar - Events
  const [sharingEventId, setSharingEventId] = useState(null);

  const [eventsData, setEventsData] = useState({});
  console.log(process.env);
  useEffect(() => {
    const url = `https://api.seatgeek.com/2/events?geoip=true&client_id=${config.SEAT_GEEK_CLIENT_ID}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setEventsData(data);
      });
  }, []);

  let eventComponents = [];

  if (Object.keys(eventsData).length > 0) {
    eventComponents = eventsData?.events?.map(function (specificEvent) {
      const handleCommentButtonPress = () => {
        if (commentingEventId === specificEvent.id) {
          setCommentingEventId(null);
        } else {
          setCommentingEventId(specificEvent.id);
        }
      };

      const handleShareButtonPress = () => {
        if (sharingEventId === specificEvent.id) {
          setSharingEventId(null);
        } else {
          setSharingEventId(specificEvent.id);
        }
      }

      return (
        <Event
          key={specificEvent.id}
          eventName={specificEvent.title}
          startTime={specificEvent.datetime_local}
          location={specificEvent.venue.display_location}
          attendees={0}
          commentBarActive={specificEvent.id === commentingEventId}
          shareBarActive={specificEvent.id === sharingEventId}
          handleCommentButtonPress={handleCommentButtonPress}
          handleShareButtonPress={handleShareButtonPress}
        />
      )
    })
  }

  return (
    <div style={styles}>
      <h1>Events</h1>
      <FilterBar>
        {filterEventsComponents}
      </FilterBar>
      {eventComponents}
    </div>
  );
}

export default EventFeed;