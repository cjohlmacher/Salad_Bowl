import React, { useState, useEffect } from 'react'
import styles from './styles'
import NewsStory from '../NewsStory';
import Filter from '../Filter';
import FilterBar from '../FilterBar';
import config from '../../config.js'

const NewsFeed = (props) => {
  const {
    children,
  } = props;


  //News Filter Creation
  const initialNewsFilters = {
    "Business": true,
    "Technology": true,
    "Entertainment": true,
    "Health": true,
    "Sports": true,
    "Science": true,
    "General": true,
  };

  const [newsFilterState, setNewsFilterState] = useState(initialNewsFilters);

  const changeFilter = (filterName, newFilterValue) => {

    const modifiedFilterState = {
      ...newsFilterState,
      [filterName]: newFilterValue,
    }
    setNewsFilterState(modifiedFilterState)
  }

  const filterNewsComponents = Object.keys(initialNewsFilters).map(function (filterName) {
    const currentFilterValue = newsFilterState[filterName];

    const handleFilterClick = () => {
      changeFilter(filterName, !currentFilterValue)
    }

    return (
      <Filter
        active={currentFilterValue}
        onToggleFilter={handleFilterClick}
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
  let categories = Object.keys(newsFilterState);

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
  for (var i = 0; i < Object.keys(newsStoryState).length; i++) {
    if (newsFilterState[Object.keys(newsStoryState)[i]] === true) {
      activeFilterCount++;
    }
  };

  //Create Story Components
  let newsStoryComponents = [];
  if (Object.keys(newsStoryState).length > 0) {
    newsStoryComponents = Object.keys(newsStoryState).filter(function (category) {
      return newsFilterState[category] === true;
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

export default NewsFeed;
