import { TOGGLE_NEWS_FILTER, TOGGLE_NEWS_LISTED, START_LOADING_NEWS, LOAD_NEWS_RESULTS } from '../actionTypes';
import moment from 'moment-timezone';

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

export function startLoadingNews() {
  return {
    type: START_LOADING_NEWS,
    payload: null,
  };
};

export function loadNewsResults(newsStoryMap) {
  return {
    type: LOAD_NEWS_RESULTS,
    payload: newsStoryMap,
  }
}

export function getNewsStories(categories) {
  return function(dispatch) {
    dispatch(startLoadingNews())
    const fetchPromises = categories.map(function (category) {
      const date = moment().format('YYYY-MM-DD');
      const url = `https://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_NEWS_API_CLIENT_ID}&categories=${category}&languages=en,-de&date=${date}&sources=-sportsillustrated`;

      return fetch(url)
        .then(response => {
          return response.json();
        });
    });

    Promise.all(fetchPromises)
      .then((data) => {
        const modifiedNewsStoryState = data.reduce((accNewsStoryState, datum, index) => {
          const modified = {
            ...accNewsStoryState,
            [categories[index]]: datum
          };

          return modified;
        }, {});
        dispatch(loadNewsResults(modifiedNewsStoryState));
      });
  };
};

export default {
  toggleNewsFilter,
  toggleNewsListed,
  startLoadingNews,
  loadNewsResults,
  getNewsStories,
};