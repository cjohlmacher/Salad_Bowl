import { CHANGE_IMAGE_CATEGORY } from '../actionTypes';

export function changeImageCategory(category) {
  return {
    type: CHANGE_IMAGE_CATEGORY,
    payload: category,
  };
};

export default {
  changeImageCategory,
};