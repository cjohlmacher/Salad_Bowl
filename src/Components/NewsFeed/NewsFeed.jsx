import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import config from '../../config.js';
import styles from './styles'
import NewsStory from '../NewsStory';
import Filter from '../Filter';
import FilterBar from '../FilterBar';
import { toggleNewsFilter } from '../../redux/actions/newsFilters';

const NewsFeed = (props) => {
  const {
    children,
    newsFilters = {},
    handleTechnologyFilterClick,
  } = props;

  const filterNewsComponents = Object.keys(newsFilters).filter(function (filterName) {
    return newsFilters[filterName].listed;
  }).map(function (filterName) {
    const currentFilterValue = newsFilters[filterName].active;

    return (
      <Filter
        active={currentFilterValue}
        onToggleFilter={handleTechnologyFilterClick}
        topic={filterName}
      />
    );
  });

  //CommentBar - News
  const [commentingNewsStoryId, setCommentingNewsStoryId] = useState(null);

  //ShareBar - News
  const [sharingNewsStoryId, setSharingNewsStoryId] = useState(null);

  const initialNewsData = {
  };

  //News API call
  const [newsStoryState, setNewsStoryState] = useState(initialNewsData);
  const [categoryIndex, setCategoryIndex] = useState(0);
  let categories = Object.keys(newsFilters);

  useEffect(() => {
    const fetchPromises = categories.map(function (category) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${config.NEWS_API_CLIENT_ID}`;

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

        setNewsStoryState(modifiedNewsStoryState);
      });
  }, []);

  //Set variables for number of articles to display
  const max_articles = 20;

  let activeFilterCount = 0;
  let newsKeys = Object.keys(newsStoryState);
  for (var i = 0; i < newsKeys.length; i++) {
    if (newsFilters[newsKeys[i]].active === true) {
      activeFilterCount++;
    };
  };

  //Create Story Components
  let newsStoryComponents = [];
  if (newsKeys.length > 0) {
    newsStoryComponents = newsKeys.filter(function (category) {
      return newsFilters[category].active === true;
    }).map(function (category) {
      return newsStoryState[category].articles.slice(0, max_articles / activeFilterCount).map(function (story) {

        const handleCommentButtonPress = () => {
          if (commentingNewsStoryId === story.url) {
            setCommentingNewsStoryId(null);
          } else {
            setCommentingNewsStoryId(story.url);
          }
        };

        const handleShareButtonPress = () => {
          if (sharingNewsStoryId === story.url) {
            setSharingNewsStoryId(null);
          } else {
            setSharingNewsStoryId(story.url);
          }
        }

        return (
          <NewsStory
            headlineTitle={story.title}
            storyUrl={story.url}
            headlineSubtitle={story.author}
            mainStorySummary={story.description}
            interactionCount={100}
            commentBarActive={story.url === commentingNewsStoryId}
            shareBarActive={story.url === sharingNewsStoryId}
            handleCommentButtonPress={handleCommentButtonPress}
            handleShareButtonPress={handleShareButtonPress}
          />
        );
      });
    });
  };

  //Return NewsFeed Component
  return (
    <div style={styles}>
      <h1>News Feed</h1>
      <FilterBar>
        {filterNewsComponents}
      </FilterBar>
      {newsStoryComponents}
    </div>
  )
};

//responsible for mapping global state into component props
function mapStateToProps(state) {
  const newsFilters = state.newsFilters;
  return {
    newsFilters,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleTechnologyFilterClick(category) {
      dispatch(toggleNewsFilter(category));
    },
  };
};

const ConnectedNewsFeed = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default ConnectedNewsFeed;
