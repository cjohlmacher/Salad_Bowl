import { combineReducers } from 'redux';

import newsFilters from './newsFilters';
import eventFilters from './eventFilters';
import imageCategory from './imageCategory';

const combinedReducer = combineReducers({
  newsFilters,
  eventFilters,
  imageCategory,
});

export default combinedReducer;