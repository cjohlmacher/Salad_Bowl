import { TOGGLE_NEWS_FILTER, TOGGLE_NEWS_LISTED, START_LOADING_NEWS, LOAD_NEWS_RESULTS } from '../actionTypes';

const initialState = {
  loading: false,
  newsStoryMap: {},
  newsFilters: {
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
          [payload]: {
            active: (state["newsFilters"][payload].listed ? false : true),
            listed: !state["newsFilters"][payload].listed,
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