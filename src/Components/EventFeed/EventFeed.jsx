import React, { useState, useEffect } from 'react'
import styles from './styles'
import Filter from '../Filter'
import FilterBar from '../FilterBar'
import Event from '../Event'

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

  useEffect(() => {
    const url = ""

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setEventsData(data);
      });
  }, []);

  let eventsList = [];

  if (Object.keys(eventsData).length === 0) {
  } else {
    eventsList = eventsData.events.map(function (specificEvent) {
      return {
        id: specificEvent.id,
        eventName: specificEvent.title,
        eventStartTime: specificEvent.datetime_local,
        eventLocation: specificEvent.venue.display_location,
        attendanceCount: 1
      }
    })
  }

  let eventComponents = {};

  if (Object.keys(eventsList) === 0) {
    eventsList = [
      {
        id: 1,
        eventName: "Picnic in the Park ",
        eventStartTime: "3:00PM",
        eventLocation: "Somerville",
        attendanceCount: 20,
      },
      {
        id: 2,
        eventName: "Hot Wings Challenge",
        eventStartTime: "6:00PM",
        eventLocation: "Boston Commons",
        attendanceCount: 9,
      },
      {
        id: 3,
        eventName: "Poetry Slam",
        eventStartTime: "10:00PM",
        eventLocation: "Howl at the Moon",
        attendanceCount: 0,
      },
      {
        id: 4,
        eventName: "Carpool Karaoke",
        eventStartTime: "11:00AM",
        eventLocation: "Massachusetts Avenue",
        attendanceCount: 1,
      },
    ];
  } else {
    eventComponents = eventsList.map(function (specificEvent) {

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
          eventName={specificEvent.eventName}
          startTime={specificEvent.eventStartTime}
          location={specificEvent.eventLocation}
          attendees={specificEvent.attendanceCount}
          commentBarActive={specificEvent.id === commentingEventId}
          shareBarActive={specificEvent.id === sharingEventId}
          handleCommentButtonPress={handleCommentButtonPress}
          handleShareButtonPress={handleShareButtonPress}
        >
        </Event>
      );
    });
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