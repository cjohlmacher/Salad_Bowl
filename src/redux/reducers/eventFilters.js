import { TOGGLE_EVENTS_FILTER } from '../actionTypes';
import { TOGGLE_EVENTS_LISTED } from '../actionTypes';

const initialState = {
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

};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_EVENTS_LISTED:
      if (state[payload].listed === true ) {
        return {
          ...state,
          [payload]: {
            active: false,
            listed: !state[payload].listed,
          },
        };
      } else {
        return {
          ...state,
          [payload]: {
            active: true,
            listed: !state[payload].listed,
          },
        };
      }
    case TOGGLE_EVENTS_FILTER:
      return {
        ...state,
        [payload]: {
          active: !state[payload].active,
          listed: state[payload].listed,
        },
      };
    default:
      return state;
  }
};

export default reducer;