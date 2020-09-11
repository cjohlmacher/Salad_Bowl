import { TOGGLE_EVENTS_FILTER } from '../actionTypes';
import { TOGGLE_EVENTS_LISTED } from '../actionTypes';

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

export default {
  toggleEventsFilter,
  toggleEventsListed,
};