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
import Headline from './Components/Headline';
import ResponseButton from './Components/ResponseButton';
import MainStory from './Components/MainStory';
import InteractionCounter from './Components/InteractionCounter';
import CommunityBar from './Components/CommunityBar';
import CommentBar from './Components/CommentBar/CommentBar';
import ShareBar from './Components/ShareBar';
import Menu from './Components/Menu';

function App() {
  

  //News Filter Creation
  const newsFilterList = [
    {
      name: "Health",
      state: useState(false),
    },
    {
      name: "Tech",
      state: useState(false),
    },
    {
      name: "Politics",
      state: useState(false),
    },
    {
      name: "International",
      state: useState(false),
    },
    {
      name: "Local",
      state: useState(false),
    },
    {
      name: "Science",
      state: useState(false),
    }
  ];


  const filterNewsComponents = newsFilterList.map(function (filter) {
        
    const handleFilterClick = () => {
      filter.state[1](!filter.state[0])
    }

    return (
      <Filter
        active={filter.state[0]}
        onToggleFilter={handleFilterClick}
        topic={filter.name}
      />
    );
  });

  //Events Filter Creation
  const eventsFilterList = [
    {
      name: "Outdoors",
      state: useState(false),
    },
    {
      name: "21+",
      state: useState(false),
    },
    {
      name: "Athletic",
      state: useState(false),
    },
    {
      name: "Hobby",
      state: useState(false),
    },
    {
      name: "Art",
      state: useState(false),
    },
    {
      name: "Food",
      state: useState(false),
    }
  ];


  const filterEventsComponents = eventsFilterList.map(function (filter) {
        
    const handleFilterClick = () => {
      filter.state[1](!filter.state[0])
    }

    return (
      <Filter
        active={filter.state[0]}
        onToggleFilter={handleFilterClick}
        topic={filter.name}
      />
    );
  });

  //CommentBar

  const newsStoryList = [
    {
      headlineTitle: "Suntan Lotion cures Smallpox",
      headlineSubtitle: "Nosun Nemore",
      mainStorySummary: "Studies show that suntan lotion applied on the elbow and armpit is able to reverse the...",
      interactionCount: 3,
      commentState: useState(false),
      shareState: useState(false),
    },
    {
      headlineTitle: "Dog Saves Bear from Avalanche",
      headlineSubtitle: "Fido Smokey",
      mainStorySummary: "An inspiring story coming out of Lake Tahoe this weekend. A bear nearly swallowed by an...",
      interactionCount: 0,
      commentState: useState(false),
      shareState: useState(false),
    },
    {
      headlineTitle: "Listening to Dua Lipa causes Mumps",
      headlineSubtitle: "NuRules Icountem",
      mainStorySummary: "Studies show that suntan lotion applied on the elbow and armpit is able to reverse the...",
      interactionCount: 1,
      commentState: useState(false),
      shareState: useState(false),
    },
    {
      headlineTitle: "Mailman Wins Lottery - Shares With Dog",
      headlineSubtitle: "Foo Foo",
      mainStorySummary: "A local mailman had the winning ticket in Tuesday's lotto taking in over 64 million...",
      interactionCount: 100,
      commentState: useState(false),
      shareState: useState(false),
    },
  ];  

  const newsStoryComponents = newsStoryList.map(function (story) {
        
    const handleCommentButtonPress = () => {
      story.commentState[1](!story.commentState[0]);
    };

    const handleShareButtonPress = () => {
      story.shareState[1](!story.shareState[0]);
    }

    return (
      <NewsStory>
              <Headline title={story.headlineTitle} subTitle={story.headlineSubtitle}/>
              <MainStory summary={story.mainStorySummary}/>
              <CommunityBar>
                <InteractionCounter count={story.interactionCount} type='news'/>
                <ResponseButton 
                  type='comment'
                  onResponseButtonPress={handleCommentButtonPress}
                />
                <ResponseButton 
                  type='share'
                  onResponseButtonPress={handleShareButtonPress}
                />
              </CommunityBar>
              <CommentBar
                active={story.commentState[0]}
              />
              <ShareBar
                active={story.shareState[0]}
              />
            </NewsStory>
    );
  });

//Events

const eventsList = [
  {
    eventName: "Picnic in the Park ",
    eventStartTime: "3:00PM",
    eventLocation: "Somerville",
    attendanceCount: 20,
    rsvpState: useState(false),
    commentState: useState(false),
    shareState: useState(false),
  },
  {
    eventName: "Hot Wings Challenge",
    eventStartTime: "6:00PM",
    eventLocation: "Boston Commons",
    attendanceCount: 9,
    rsvpState: useState(false),
    commentState: useState(false),
    shareState: useState(false),
  },
  {
    eventName: "Poetry Slam",
    eventStartTime: "10:00PM",
    eventLocation: "Howl at the Moon",
    attendanceCount: 0,
    rsvpState: useState(false),
    commentState: useState(false),
    shareState: useState(false),
  },
  {
    eventName: "Carpool Karaoke",
    eventStartTime: "11:00AM",
    eventLocation: "Massachusetts Avenue",
    attendanceCount: 1,
    rsvpState: useState(false),
    commentState: useState(false),
    shareState: useState(false),
  },
];  

const eventComponents = eventsList.map(function (specificEvent) {
      
  const handleCommentButtonPress = () => {
    specificEvent.commentState[1](!specificEvent.commentState[0]);
  };

  const handleShareButtonPress = () => {
    specificEvent.shareState[1](!specificEvent.shareState[0]);
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
            >
              <CommunityBar>
                <InteractionCounter count={specificEvent.attendanceCount} type='event'/>
                <ResponseButton 
                  type='rsvp'
                  onResponseButtonPress={handleRsvpButtonPress}
                  active={specificEvent.rsvpState[0]}
                  />
                <ResponseButton 
                  type='comment'
                  onResponseButtonPress={handleCommentButtonPress}
                />
                <ResponseButton 
                  type='share'
                  onResponseButtonPress={handleShareButtonPress}
                />
              </CommunityBar>
              <CommentBar
                active={specificEvent.commentState[0]}
                />
              <ShareBar
                active={specificEvent.shareState[0]}
              />
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
        <Banner headline="SaladBowl: Fresh News and Events"/>
      </Header>
      <DailyImage/>
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
    <img className="inspoPic" src="https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg"/>
  )
}

export default App;
