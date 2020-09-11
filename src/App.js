import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './Components/Header'
import PopUpIcon from './Components/PopUpIcon'
import Body from './Components/Body'
import NewsFeed from './Components/NewsFeed'
import EventFeed from './Components/EventFeed'
import Weather from './Components/Weather';
import PageDivider from './Components/PageDivider';
import Menu from './Components/Menu';
import DailyImage from './Components/DailyImage';
import Settings from './Components/Settings';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

function App() {

  //Menu Icon
  const [menuIconEnabled, setMenuState] = useState(false);

  const handleMenuClick = () => {
    setMenuState(!menuIconEnabled);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Header
          headline="Salad Bowl: Fresh News and Events"
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
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <DailyImage />
          </Route>
        </Switch>
        <Body>
          <PageDivider>
            <NewsFeed />
          </PageDivider>
          <PageDivider>
            <Weather />
            <EventFeed />
          </PageDivider>
        </Body>
      </div >
    </Provider >

  );
}

export default App;
