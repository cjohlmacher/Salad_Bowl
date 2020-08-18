import React, { useState, useEffect } from 'react';
import './App.css';

import NewsStory from './Components/NewsStory'
import Header from './Components/Header'
import PopUpIcon from './Components/PopUpIcon'
import Banner from './Components/Banner'
import Body from './Components/Body'
import NewsFeed from './Components/NewsFeed'
import EventFeed from './Components/EventFeed'
import Weather from './Components/Weather';
import FilterBar from './Components/FilterBar';
import Filter from './Components/Filter';
import PageDivider from './Components/PageDivider';
import Menu from './Components/Menu';
import DailyImage from './Components/DailyImage';

function App() {

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
      </Header>
      <DailyImage />
      <Body>
        <PageDivider>
          <NewsFeed />
        </PageDivider>
        <PageDivider>
          <Weather />
          <EventFeed />
        </PageDivider>
      </Body>
    </div>
  );
}

export default App;
