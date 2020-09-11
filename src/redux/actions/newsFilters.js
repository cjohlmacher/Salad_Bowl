import { TOGGLE_NEWS_FILTER } from '../actionTypes';
import { TOGGLE_NEWS_LISTED } from '../actionTypes';

export function toggleNewsFilter(category) {
  return {
    type: TOGGLE_NEWS_FILTER,
    payload: category,
  };
};

export function toggleNewsListed(category) {
  return {
    type: TOGGLE_NEWS_LISTED,
    payload: category,
  };
};

export default {
  toggleNewsFilter,
  toggleNewsListed,
};