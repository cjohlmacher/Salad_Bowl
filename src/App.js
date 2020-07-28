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


function App() {
  const [healthFilterEnabled, setHealthFilter] = useState(false);
  const [techFilterEnabled, setTechFilter] = useState(false);

  const handleHealthFilterClick = () => {
    const newHealthFilterValue = !healthFilterEnabled; // the opposite of whatever's in state 
    setHealthFilter(newHealthFilterValue);
  };

  const handleTechFilterClick = () => {
    setTechFilter(!techFilterEnabled);
  };

  return (
    <div className="App">
      <Header 
        greeting="What's up, Chicago!"
      >
        <PopUpIcon tag="fas fa-bars"/>
        <Banner headline="SaladBowl: Fresh News and Events Curated By You - For You"/>
      </Header>
      <DailyImage/>
      <Body>
        <PageDivider>
          <NewsFeed>
            <FilterBar>
              <Filter
                active={healthFilterEnabled}
                onToggleFilter={handleHealthFilterClick}
                topic="Health"
              />
              <Filter
                active={techFilterEnabled}
                onToggleFilter={handleTechFilterClick}
                topic="Tech"
              />
              <Filter
                topic="Politics"
              />
              <Filter
                topic="International"
              />
              <Filter
                topic="Science"
              />
              <Filter
                topic="Local"
                active={true}
              />
            </FilterBar>

            <NewsStory>
              <Headline title="Suntan Lotion cures Smallpox" subTitle="Nosun Nemore"/>
              <MainStory summary="Studies show that suntan lotion applied on the elbow and armpit is able to reverse the..."/>
              <CommunityBar>
                <InteractionCounter count={3} type='news'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </NewsStory>

            <NewsStory>
              <Headline title="Dog Saves Bear from Avalanche" subTitle="Fido Smokey"/>
              <MainStory summary="Studies show that suntan lotion applied on the elbow and armpit is able to reverse the..."/>
              <CommunityBar>
                <InteractionCounter count={0} type='news'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </NewsStory>
  
            <NewsStory>
              <Headline title="Listening to Dua Lipa causes Mumps" subTitle="NuRules Icountem"/>
              <MainStory summary="Studies show that suntan lotion applied on the elbow and armpit is able to reverse the..."/>
              <CommunityBar>
                <InteractionCounter count={1} type='news'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </NewsStory>

            <NewsStory>
              <Headline title="Mailman Wins Lottery - Shares With Dog" subTitle="Foo Foo"/>
              <MainStory summary="Studies show that suntan lotion applied on the elbow and armpit is able to reverse the..."/>
              <CommunityBar>
                <InteractionCounter count={100} type='news'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </NewsStory>

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
              <Filter
                topic="Outdoors"
                active={true}
              />
              <Filter
                topic="21+"
              />
              <Filter
                topic="Athletic"
                active={true}
              />
              <Filter
                topic="Hobby"
                active={true}
              />
              <Filter
                topic="Art"
              />
              <Filter
                topic="Food"
              />
            </FilterBar>
            
            <Event
              eventName="Picnic in the Park"
              startTime="3:00PM" 
              location="Somerville"
              attendees={20}
            >
              <CommunityBar>
                <InteractionCounter count={20} type='event'/>
                <ResponseButton type='rsvp'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </Event>

            <Event
              eventName="Hot Wings Challenge"
              startTime="6:00PM" 
              location="Boston Commons"
            >
              <CommunityBar>
                <InteractionCounter count={9} type='event'/>
                <ResponseButton type='rsvp'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </Event>
              

            <Event
              eventName="Poetry Slam"
              startTime="10:00PM" 
              location="Howl at the Moon"
            >
              <CommunityBar>
                <InteractionCounter count={0} type='event'/>
                <ResponseButton type='rsvp'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </Event>

            <Event
              eventName="Carpool Karaoke"
              startTime="11:00AM" 
              location="Massachusetts Avenue"
            >
              <CommunityBar>
                <InteractionCounter count={1} type='event'/>
                <ResponseButton type='rsvp'/>
                <ResponseButton type='comment'/>
                <ResponseButton type='share'/>
              </CommunityBar>
            </Event>
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
