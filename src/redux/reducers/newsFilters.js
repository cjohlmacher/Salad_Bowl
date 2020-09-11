import { TOGGLE_NEWS_FILTER } from '../actionTypes';
import { TOGGLE_NEWS_LISTED } from '../actionTypes';

const initialState = {
  "Technology": {
    active: true,
    listed: true,
  },
  "Business": {
    active: true,
    listed: true,
  },
  "Entertainment": {
    active: true,
    listed: true,
  },
  "Health": {
    active: true,
    listed: true,
  },
  "Sports": {
    active: true,
    listed: true,
  },
  "Science": {
    active: true,
    listed: true,
  },
  "General": {
    active: true,
    listed: true,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DISABLE_NEWS_FILTER":
      return {
        ...state,
        newsFilters: {
          ...state.newsFilters,
          [payload]: false,
        }
      };
    case "ENABLE_NEWS_FILTER":
      return {
        ...state,
        newsFilters: {
          ...state.newsFilters,
          [payload]: true,
        }
      };
    case TOGGLE_NEWS_FILTER:
      return {
        ...state,
        [payload]: {
          active: !state[payload].active,
          listed: state[payload].listed,
        },
      };
    case TOGGLE_NEWS_LISTED:
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
    default:
      return state;
  }
};

export default reducer;