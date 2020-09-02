const initialState = {
  newsFilters: {
    "Technology": true,
    "Business": true,
    "Entertainment": true,
    "Health": true,
    "Sports": true,
    "Science": true,
    "General": true,
  },
  imageCategory: {
    "Puppy": true,
    "Sports": false,
    "Space": false,
    "Flowers": false,
  },
  eventFilters: {
    "Sports": true,
    "F1 Racing": true,
    "Concert": true,
    "Literary": true,
    "Family Entertainment": true,
    "Theater": true,
    "Film": true,
  }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DISABLE_NEWS_FILTER":
      return {
        ...state,
        newsFilters: {
          ...state.newsFilters,
          payload: false,
        }
      };
    case "ENABLE_NEWS_FILTER":
      return {
        ...state,
        newsFilters: {
          ...state.newsFilters,
          payload: true,
        }
      };
    case "TOGGLE_NEWS_FILTER":
      return {
        ...state,
        newsFilters: {
          ...state.newsFilters,
          [payload]: !state.newsFilters[payload],
        }
      };
    case "CHANGE_IMAGE_CATEGORY":
      let currentState = {
        ...state,
      };
      Object.keys(currentState.imageCategory).forEach(function (category) {
        currentState.imageCategory[category] = false;
      });
      currentState.imageCategory[payload] = true;
      return currentState;
    case "DISABLE_EVENTS_FILTER":
      return {
        ...state,
        eventsFilters: {
          ...state.eventsFilters,
          [payload]: false,
        }
      };
    case "ENABLE_EVENTS_FILTER":
      return {
        ...state,
        eventsFilters: {
          ...state.eventsFilters,
          [payload]: true,
        }
      };
    case "TOGGLE_EVENTS_FILTER":
      return {
        ...state,
        eventsFilters: {
          ...state.eventsFilters,
          [payload]: !state.eventsFilters[payload],
        }
      };
    default:
      return state;
  }
};

export default reducer;