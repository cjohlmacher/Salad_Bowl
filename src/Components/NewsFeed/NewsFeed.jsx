import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import styles from './styles'
import NewsStory from '../NewsStory';
import Filter from '../Filter';
import FilterBar from '../FilterBar';
import { toggleNewsFilter, getNewsStories } from '../../redux/actions/newsFilters';

const NewsFeed = (props) => {
  const {
    children,
    newsFilters = {},
    loading,
    newsStoryMap = {},
    handleFilterClick,
    loadNewsStories = () => {},
  } = props;

  //Load News Stories
  let categories = Object.keys(newsFilters);
  useEffect(() => {
    loadNewsStories(categories);
  }, []);

  //Create Filters
  const filterNewsComponents = Object.keys(newsFilters).filter(function (filterName) {
    return newsFilters[filterName].listed;
  }).map(function (filterName) {
    const currentFilterValue = newsFilters[filterName].active;

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

  //Create Story Components
  let newsStoryComponents = [];
  if (Object.keys(newsStoryMap).length > 0) {
    //Set variables for number of articles to display
    const max_articles = 20;
    let activeFilterCount = 0;
    
    let newsKeys = Object.keys(newsStoryMap);
    for (var i = 0; i < newsKeys.length; i++) {
      if (newsFilters[newsKeys[i]].active === true) {
        activeFilterCount++;
      };
    };

    if (newsKeys.length > 0) {
      newsStoryComponents = newsKeys.filter(function (category) {
        return newsFilters[category].active === true;
      }).map(function (category) {
        return newsStoryMap[category].articles.slice(0, max_articles / activeFilterCount).map(function (story) {

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
  };

  //Return NewsFeed Component
  return (
    <div style={styles}>
      <h1>News Feed</h1>
      <FilterBar>
        {filterNewsComponents}
      </FilterBar>
      {loading ? <div>Loading...</div> : newsStoryComponents}
    </div>
  )
};

//responsible for mapping global state into component props
function mapStateToProps(state) {
  return {
    newsFilters: state.newsFilters.newsFilters,
    loading: state.newsFilters.loading,
    newsStoryMap: state.newsFilters.newsStoryMap,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleFilterClick(category) {
      dispatch(toggleNewsFilter(category));
    },
    // loadNewsStories(categories) {
    //   dispatch(getNewsStories(categories))
    // },
  };
};

const ConnectedNewsFeed = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default ConnectedNewsFeed;
