const initialState = {
  techFilterEnabled: true,
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "DISABLE_TECH_FILTER":
      return {
        ...state,
        techFilterEnabled: false,
      };
    case "ENABLE_TECH_FILTER":
      return {
        ...state,
        techFilterEnabled: true,
      };
    case "TOGGLE_TECH_FILTER":
      return {
        ...state,
        techFilterEnabled: !state.techFilterEnabled,
      };
    default:
      return state;
  }
};

export default reducer;