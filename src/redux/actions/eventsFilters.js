import { TOGGLE_EVENTS_FILTER, TOGGLE_EVENTS_LISTED, START_LOADING_EVENTS, LOAD_EVENTS } from '../actionTypes';

export function toggleEventsFilter(category) {
  return {
    type: TOGGLE_EVENTS_FILTER,
    payload: category,
  };
};

export function toggleEventsListed(category) {
  return {
    type: TOGGLE_EVENTS_LISTED,
    payload: category,
  };
};

export function startLoadingEvents() {
  return {
    type: START_LOADING_EVENTS,
    payload: null,
  };
};

export function loadEventResults(events) {
  return {
    type: LOAD_EVENTS,
    payload: events,
  };
}

export function getEvents() {
  return function(dispatch) {
    dispatch(startLoadingEvents());
    const url = `https://api.seatgeek.com/2/events?geoip=true&per_page=30&client_id=${process.env.REACT_APP_SEAT_GEEK_CLIENT_ID}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(loadEventResults(data));
      });
  };
};

export default {
  toggleEventsFilter,
  toggleEventsListed,
  startLoadingEvents,
  loadEventResults,
  getEvents,
};