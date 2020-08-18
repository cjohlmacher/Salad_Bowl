import React, { useState, useEffect } from 'react'
import styles from './styles'
import NewsStory from '../NewsStory';
import Filter from '../Filter';
import FilterBar from '../FilterBar';

const NewsFeed = (props) => {
  const {
    children,
  } = props;


  //News Filter Creation
  const initialNewsFilters = {
    "Health": true,
    "Tech": true,
    "Politics": true,
    "International": true,
    "Local": true,
    "Science": true,
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

  const newsStoryList = [
    {
      id: 1,
      headlineTitle: "Suntan Lotion cures Smallpox",
      headlineSubtitle: "Nosun Nemore",
      mainStorySummary: "Studies show that suntan lotion applied on the elbow and armpit is able to reverse the...",
      interactionCount: 3,
      categories: ["Health", "Science"],
    },
    {
      id: 2,
      headlineTitle: "Dog Saves Bear from Avalanche",
      headlineSubtitle: "Fido Smokey",
      mainStorySummary: "An inspiring story coming out of Lake Tahoe this weekend. A bear nearly swallowed by an...",
      interactionCount: 0,
      categories: ["Local"],
    },
    {
      id: 3,
      headlineTitle: "Listening to Dua Lipa causes Mumps",
      headlineSubtitle: "NuRules Icountem",
      mainStorySummary: "Studies show that suntan lotion applied on the elbow and armpit is able to reverse the...",
      interactionCount: 1,
      categories: ["Health"],
    },
    {
      id: 4,
      headlineTitle: "Mailman Wins Lottery - Shares With Dog",
      headlineSubtitle: "Foo Foo",
      mainStorySummary: "A local mailman had the winning ticket in Tuesday's lotto taking in over 64 million...",
      interactionCount: 100,
      categories: ["Local"],
    },
    {
      id: 5,
      headlineTitle: "World Leaders Gather in Miami for Flash Mob",
      headlineSubtitle: "Ivanna Dancewithsomebody",
      mainStorySummary: "Leaders from Denmark, Nepal, Canada, and Japan gathered yesterday in a coordinated rendition of Britney Spears' hit song 'Toxic'...",
      interactionCount: 100,
      categories: ["International", "Politics"],
    },
    {
      id: 6,
      headlineTitle: "Solo Tango Dancer Defies Preconceptions About Genre",
      headlineSubtitle: "Walt Zinaname",
      mainStorySummary: "Contrary to popular belief, tango dancer Gnome Chompsky does not believe it takes 'two to tango'.  He is perfectly happy dancing the tango alone.",
      interactionCount: 100,
      categories: ["Local"],
    },
  ];

  const newsStoryComponents = newsStoryList.filter(function (story) {
    let desiredCategory = false;

    for (var i = 0; i < story.categories.length; i++) {
      if (newsFilterState[story.categories[i]] === true) {
        desiredCategory = true;
      }
    }

    return desiredCategory === true;

  }).map(function (story) {

    const handleCommentButtonPress = () => {
      if (commentingNewsStoryId === story.id) {
        setCommentingNewsStoryId(null);
      } else {
        setCommentingNewsStoryId(story.id);
      }
    };

    const handleShareButtonPress = () => {
      if (sharingNewsStoryId === story.id) {
        setSharingNewsStoryId(null);
      } else {
        setSharingNewsStoryId(story.id);
      }
    }

    return (
      <NewsStory
        headlineTitle={story.headlineTitle}
        headlineSubtitle={story.headlineSubtitle}
        mainStorySummary={story.mainStorySummary}
        interactionCount={story.interactionCount}
        commentBarActive={story.id === commentingNewsStoryId}
        shareBarActive={story.id === sharingNewsStoryId}
        handleCommentButtonPress={handleCommentButtonPress}
        handleShareButtonPress={handleShareButtonPress}
      />
    );
  })

  return (
    <div style={styles}>
      <h1>News Feed</h1>
      <FilterBar>
        {filterNewsComponents}
      </FilterBar>
      {newsStoryComponents}
    </div>
  )
}

export default NewsFeed;