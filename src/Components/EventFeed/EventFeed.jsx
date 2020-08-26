import React, { useState, useEffect } from 'react'
import styles from './styles'
import Filter from '../Filter'
import FilterBar from '../FilterBar'
import Event from '../Event'
import config from '../../config.js'
import moment from 'moment-timezone';

const EventFeed = (props) => {
  const {
    children,
  } = props;

  //Events Filter Creation

  const initialEventFilters = {
    "Sports": true,
    "F1 Racing": true,
    "Concert": true,
    "Literary": true,
    "Family Entertainment": true,
    "Theater": true,
    "Film": true,
  }

  const [eventFilterState, setEventFilterState] = useState(initialEventFilters)

  /*
  //Saving this code for a later expanded filter functionality
  const [eventFilterData, setEventFilterData] = useState({})

  useEffect(() => {
    const url = `https://api.seatgeek.com/2/taxonomies?&client_id=${config.SEAT_GEEK_CLIENT_ID}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setEventFilterData(data);
      });
  }, []);
  */

  let filterEventsComponents = []
  filterEventsComponents = Object.keys(initialEventFilters).map(function (eventCategory) {

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
  })

  const changeEventFilterState = (filterName, newFilterValue) => {

    const modifiedFilterState = {
      ...eventFilterState,
      [filterName]: newFilterValue,
    }
    setEventFilterState(modifiedFilterState)
  }

  //Events
  //CommentBar - Events
  const [commentingEventId, setCommentingEventId] = useState(null);

  //ShareBar - Events
  const [sharingEventId, setSharingEventId] = useState(null);

  const [eventsData, setEventsData] = useState({});

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

  eventComponents = eventsData?.events?.filter(function (specificEvent) {
    let taxonomies = specificEvent?.taxonomies ? specificEvent.taxonomies : [];
    return taxonomies.some(function (taxonomy) {
      let capTaxonomy = taxonomy.name.charAt(0).toUpperCase() + taxonomy.name.slice(1);
      return eventFilterState[capTaxonomy];
    });
  }).map(function (specificEvent) {
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
    };

    const timestamp_utc = specificEvent.datetime_utc;
    const timezone = specificEvent.venue.timezone;
    const date = moment.utc(timestamp_utc).tz(timezone);
    const formattedTime = date.format("dddd MMM Do, YYYY [@] h:mm zz");

    return (
      <Event
        key={specificEvent.id}
        eventName={specificEvent.title}
        startTime={formattedTime}
        location={specificEvent.venue.display_location}
        attendees={0}
        commentBarActive={specificEvent.id === commentingEventId}
        shareBarActive={specificEvent.id === sharingEventId}
        handleCommentButtonPress={handleCommentButtonPress}
        handleShareButtonPress={handleShareButtonPress}
      />
    )
  });

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