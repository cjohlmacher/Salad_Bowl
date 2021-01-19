import { TOGGLE_NEWS_FILTER, TOGGLE_NEWS_LISTED, START_LOADING_NEWS, LOAD_NEWS_RESULTS } from '../actionTypes';

const initialState = {
  loading: false,
  newsStoryMap: {},
  newsFilters: {
    "technology": {
      active: true,
      listed: true,
    },
    "business": {
        active: true,
        listed: true,
    },
    "entertainment": {
        active: true,
        listed: true,
    },
    "health": {
        active: true,
        listed: true,
    },
    "sports": {
        active: true,
        listed: true,
    },
    "science": {
        active: true,
        listed: true,
    },
    "general": {
        active: true,
        listed: true,
    },
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_NEWS_FILTER:
      return {
        ...state,
        newsFilters: {
            ...state.newsFilters,
            [payload]: {
              active: !state["newsFilters"][payload].active,
              listed: state["newsFilters"][payload].listed,
            },
        },
      };
    case TOGGLE_NEWS_LISTED:
      return {
        ...state,
        newsFilters: {
          ...state.newsFilters,
          [payload.charAt(0).toLowerCase()+payload.slice(1)]: {
            active: (state["newsFilters"][payload.charAt(0).toLowerCase()+payload.slice(1)].listed ? false : true),
            listed: !state["newsFilters"][payload.charAt(0).toLowerCase()+payload.slice(1)].listed,
          },
        },
      };
    case START_LOADING_NEWS:
      return {
        ...state,
        loading: true,
      }
    case LOAD_NEWS_RESULTS:
      return {
        ...state,
        newsStoryMap: payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default reducer;