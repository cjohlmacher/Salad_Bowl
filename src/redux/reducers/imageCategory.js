import { CHANGE_IMAGE_CATEGORY } from '../actionTypes';

const initialState = {
  "Puppy": {
    listed: true,
  },
  "Sports": {
    listed: false,
  },
  "Space": {
    listed: false,
  },
  "Flowers": {
    listed: false,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_IMAGE_CATEGORY:
      let currentState = {
        ...state,
      };
      Object.keys(currentState).forEach(function (category) {
        currentState[category].listed = false;
      });
      currentState[payload].listed = true;
      return currentState;
    default:
      return state;
  }
};

export default reducer;