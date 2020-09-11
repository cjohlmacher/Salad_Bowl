import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone';
import { connect } from 'react-redux';

import styles from './styles'
import Filter from '../Filter'
import FilterBar from '../FilterBar'
import Event from '../Event'
import config from '../../config.js'
import { toggleEventsFilter } from '../../redux/actions/eventsFilters';

const EventFeed = (props) => {
  const {
    children,
    eventFilters = {},
    handleEventFilterClick,
  } = props;

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
  //Events Filter Creation

  let filterEventsComponents = [];

  filterEventsComponents = Object.keys(eventFilters).filter(function (eventCategory) {
    return eventFilters[eventCategory].listed;
  }).map(function (eventCategory) {

    const currentFilterValue = eventFilters[eventCategory].active;

    const handleFilterClick = () => {
      handleEventFilterClick(eventCategory);
    }

    return (
      <Filter
        active={currentFilterValue}
        onToggleFilter={handleFilterClick}
        topic={eventCategory}
      />
    );
  })

  //Events
  //CommentBar - Events
  const [commentingEventId, setCommentingEventId] = useState(null);

  //ShareBar - Events
  const [sharingEventId, setSharingEventId] = useState(null);

  const [eventsData, setEventsData] = useState({});

  useEffect(() => {
    const url = `https://api.seatgeek.com/2/events?geoip=true&per_page=30&client_id=${config.SEAT_GEEK_CLIENT_ID}`;

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

  const slugToKey = function(taxonomyName) {
    let eventKey = taxonomyName;
    eventKey = eventKey.split('_');
    eventKey = eventKey.map(function(word) {
      word = word.charAt(0).toUpperCase()+word.slice(1);
      return word;
    });
    eventKey = eventKey.join(" ");
    return eventKey
  };

  eventComponents = eventsData?.events?.filter(function (specificEvent) {
    let taxonomies = specificEvent?.taxonomies ? specificEvent.taxonomies : [];
    return taxonomies.some(function (taxonomy) {
      let keyedTaxonomy = slugToKey(taxonomy?.name);
      console.log(keyedTaxonomy);
      if (Object.keys(eventFilters).includes(keyedTaxonomy)) {
        return eventFilters[keyedTaxonomy].active;
      } else {
        return false;
      }
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

function mapStateToProps(state) {
  const eventFilters = state.eventFilters;
  return {
    eventFilters,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleEventFilterClick(category) {
      dispatch(toggleEventsFilter(category));
    },
  };
};

const connectedEventFeed = connect(mapStateToProps, mapDispatchToProps)(EventFeed);

export default connectedEventFeed;