import { TOGGLE_EVENTS_FILTER, TOGGLE_EVENTS_LISTED, START_LOADING_EVENTS, LOAD_EVENTS } from '../actionTypes';

const initialState = {
  eventFilters: {
    "Sports": {
      active: true,
      listed: true,
    },
    "F1 Racing": {
      active: true,
      listed: true,
    },
    "Concert": {
      active: true,
      listed: true,
    },
    "Literary": {
      active: true,
      listed: true,
    },
    "Family Entertainment": {
      active: true,
      listed: true,
    },
    "Theater": {
      active: true,
      listed: true,
    },
    "Film": {
      active: true,
      listed: true,
    },
    "Baseball": {
      active: false,
      listed: false,
    },
    "Football": {
      active: false,
      listed: false,
    },
    "Basketball": {
      active: false,
      listed: false,
    },
    "Hockey": {
      active: false,
      listed: false,
    },
    "Soccer": {
      active: false,
      listed: false,
    },
    "Motocross": {
      active: false,
      listed: false,
    },
    "Monster Truck": {
      active: false,
      listed: false,
    },
    "Fighting": {
      active: false,
      listed: false,
    },
    "Golf": {
      active: false,
      listed: false,
    },
    "Tennis": {
      active: false,
      listed: false,
    },
    "Rodeo": {
      active: false,
      listed: false,
    },
    "Climbing": {
      active: false,
      listed: false,
    },
    "Esports": {
      active: false,
      listed: false,
    },
    "Music Festivals": {
      active: false,
      listed: false,
    },
    "Broadway Shows": {
      active: false,
      listed: false,
    },
    "Classical": {
      active: false,
      listed: false,
    },
    "Comedy": {
      active: false,
      listed: false,
    },
    "Dance Shows": {
      active: false,
      listed: false,
    },
  },
  eventsData: {
  },
  loading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_EVENTS_LISTED:
      return {
        ...state,
        eventFilters: {
          ...state.eventFilters,
          [payload]: {
            active: (state["eventFilters"][payload].listed ? false : true),
            listed: !state["eventFilters"][payload].listed,
          },
        },
      };
    case TOGGLE_EVENTS_FILTER:
      return {
        ...state,
        eventFilters: {
          ...state.eventFilters,
          [payload]: {
            active: !state["eventFilters"][payload].active,
            listed: state["eventFilters"][payload].listed,
          },
        },
      };
    case START_LOADING_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_EVENTS:
      return {
        ...state,
        loading: false,
        eventsData: payload,
      }
    default:
      return state;
  }
};

export default reducer;