import React, { useState } from 'react';
import './App.css';

import NewsStory from './Components/NewsStory'
import Header from './Components/Header'
import PopUpIcon from './Components/PopUpIcon'
import Banner from './Components/Banner'
import Body from './Components/Body'
import NewsFeed from './Components/NewsFeed'
import EventFeed from './Components/EventFeed'
import Weather from './Components/Weather'
import CurrentWeather from './Components/CurrentWeather'
import Forecast from './Components/Forecast';
import FilterBar from './Components/FilterBar';
import Filter from './Components/Filter';
import Event from './Components/Event';
import PageDivider from './Components/PageDivider';
import ResponseButton from './Components/ResponseButton';
import InteractionCounter from './Components/InteractionCounter';
import CommunityBar from './Components/CommunityBar';
import CommentBar from './Components/CommentBar/CommentBar';
import ShareBar from './Components/ShareBar';
import Menu from './Components/Menu';

function App() {


  //News Filter Creation

  const initialNewsFilters = {
    "Health": false,
    "Tech": false,
    "Politics": false,
    "International": false,
    "Local": false,
    "Science": false,
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

  //Events Filter Creation

  const initialEventFilters = {
    "Outdoors": false,
    "21+": false,
    "Athletic": false,
    "Hobby": false,
    "Art": false,
    "Food": false,
  }

  const [eventFilterState, setEventFilterState] = useState(initialEventFilters)

  const changeEventFilterState = (filterName, newFilterValue) => {

    const modifiedFilterState = {
      ...eventFilterState,
      [filterName]: newFilterValue,
    }
    setEventFilterState(modifiedFilterState)
  }

  const filterEventsComponents = Object.keys(initialEventFilters).map(function (eventCategory) {

    const currentFilterValue = eventFilterState[eventCategory]


    const handleFilterClick = () => {
      changeEventFilterState(eventCategory, !currentFilterValue)
    }

    return (
      <Filter
        active={eventFilterState[eventCategory]}
        onToggleFilter={handleFilterClick}
        topic={eventCategory}
      />
    );
  });

  //CommentBar - News
  const [commentingNewsStoryId, setCommentingNewsStoryId] = useState(null);

  //ShareBar - News
  const [sharingNewsStoryId, setSharingNewsStoryId] = useState(null);

  //CommentBar - Events
  const [commentingEventId, setCommentingEventId] = useState(null);

  //ShareBar - Events
  const [sharingEventId, setSharingEventId] = useState(null);

  const newsStoryList = [
    {
      id: 1,
      headlineTitle: "Suntan Lotion cures Smallpox",
      headlineSubtitle: "Nosun Nemore",
      mainStorySummary: "Studies show that suntan lotion applied on the elbow and armpit is able to reverse the...",
      interactionCount: 3,
    },
    {
      id: 2,
      headlineTitle: "Dog Saves Bear from Avalanche",
      headlineSubtitle: "Fido Smokey",
      mainStorySummary: "An inspiring story coming out of Lake Tahoe this weekend. A bear nearly swallowed by an...",
      interactionCount: 0,
    },
    {
      id: 3,
      headlineTitle: "Listening to Dua Lipa causes Mumps",
      headlineSubtitle: "NuRules Icountem",
      mainStorySummary: "Studies show that suntan lotion applied on the elbow and armpit is able to reverse the...",
      interactionCount: 1,
    },
    {
      id: 4,
      headlineTitle: "Mailman Wins Lottery - Shares With Dog",
      headlineSubtitle: "Foo Foo",
      mainStorySummary: "A local mailman had the winning ticket in Tuesday's lotto taking in over 64 million...",
      interactionCount: 100,
    },
  ];

  const newsStoryComponents = newsStoryList.map(function (story) {

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
  });

  //Events

  const eventsList = [
    {
      id: 1,
      eventName: "Picnic in the Park ",
      eventStartTime: "3:00PM",
      eventLocation: "Somerville",
      attendanceCount: 20,
      rsvpState: useState(false),
    },
    {
      id: 2,
      eventName: "Hot Wings Challenge",
      eventStartTime: "6:00PM",
      eventLocation: "Boston Commons",
      attendanceCount: 9,
      rsvpState: useState(false),
    },
    {
      id: 3,
      eventName: "Poetry Slam",
      eventStartTime: "10:00PM",
      eventLocation: "Howl at the Moon",
      attendanceCount: 0,
      rsvpState: useState(false),
    },
    {
      id: 4,
      eventName: "Carpool Karaoke",
      eventStartTime: "11:00AM",
      eventLocation: "Massachusetts Avenue",
      attendanceCount: 1,
      rsvpState: useState(false),
    },
  ];

  const eventComponents = eventsList.map(function (specificEvent) {

    const handleCommentButtonPress = () => {
      if (commentingEventId === specificEvent.id) {
        setCommentingEventId(null);
      } else {
        setCommentingEventId(specificEvent.id);
      }
    };

    const handleShareButtonPress = () => {
      if (sharingEventId === specificEvent.id) {
        setSharingEventId(null);
      } else {
        setSharingEventId(specificEvent.id);
      }
    }

    const handleRsvpButtonPress = () => {
      specificEvent.rsvpState[1](!specificEvent.rsvpState[0]);
    }

    return (
      <Event
        eventName={specificEvent.eventName}
        startTime={specificEvent.eventStartTime}
        location={specificEvent.eventLocation}
        attendees={specificEvent.attendanceCount}
        commentBarActive={specificEvent.id === commentingEventId}
        shareBarActive={specificEvent.id === sharingEventId}
        handleCommentButtonPress={handleCommentButtonPress}
        handleShareButtonPress={handleShareButtonPress}
        handleRsvpButtonPress={handleRsvpButtonPress}
        rsvpState={specificEvent.rsvpState}
      >
      </Event>
    );
  });

  //Menu Icon

  const [menuIconEnabled, setMenuState] = useState(false);

  const handleMenuClick = () => {
    setMenuState(!menuIconEnabled);
  };


  return (
    <div className="App">
      <Header
        greeting="What's up, Chicago!"
      >
        <PopUpIcon
          tag="fas fa-bars"
          active={menuIconEnabled}
          onMenuClick={handleMenuClick}
        />
        <Menu
          active={menuIconEnabled}
        />
        <Banner headline="SaladBowl: Fresh News and Events" />
      </Header>
      <DailyImage />
      <Body>
        <PageDivider>
          <NewsFeed>
            <FilterBar>
              {filterNewsComponents}
            </FilterBar>
            {newsStoryComponents}
          </NewsFeed>
        </PageDivider>

        <PageDivider>
          <Weather>
            <CurrentWeather
              weather='snow'
              temp='29 F'
              humidity='50'
              windSpeed='7'
            />
            <Forecast
              forecastWeather='sunny'
              forecastTemp='73 F'
            />
          </Weather>

          <EventFeed>
            <FilterBar>
              {filterEventsComponents}
            </FilterBar>

            {eventComponents}
          </EventFeed>
        </PageDivider>
      </Body>
    </div>
  );
}



function DailyImage() {
  return (
    <img className="inspoPic" src="https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg" />
  )
}

export default App;
