import React, { useState, useEffect } from 'react'
import styles from './styles'
import CurrentWeather from '../CurrentWeather'
import Forecast from '../Forecast'

const Weather = (props) => {
  const {
    children,
  } = props;

  const [weatherData, setWeatherData] = useState({});
  const [locationData,setLocationData] = useState({});

  const fetchWeather = (lat,long) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_CLIENT_ID}`;
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      setWeatherData(data);
    });
  };

  const fetchLocation = (lat,long) => {
    const url = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAPQUEST_API_CLIENT_ID}&location=${lat},${long}`;
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      setLocationData(data);
    })
  }
  
  //Setup Default Location
  let lat = 33;
  let long = -120;
  let location = 'San Francisco, CA';

  //Fetch Location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        fetchWeather(lat,long);
        fetchLocation(lat,long);
      });
    } else {
        fetchWeather(lat,long);
    };
  }, []);

  let weatherDescription = undefined;
  let weatherIcon = undefined;
  let forecastDescription = undefined;
  let forecastIcon = undefined;
  let forecastTemp = undefined;
  let forecastTimeOfDay = undefined;
  let forecast = undefined;
  
  //Determine whether forecast will show tonight or tomorrow's weather
  let curfew = 20;

  const findForecast = (weatherDataObject, curfewTime) => {
    let currentTime = new Date(0);
    currentTime.setUTCSeconds(weatherData.current.dt);
    let currentHour = currentTime.getHours();
    if (currentHour < curfew) {
      [forecastDescription, forecastIcon, forecastTemp] = [weatherData.daily[0].weather[0].main, weatherData.daily[0].weather[0].icon, weatherData.daily[0].temp.eve]
      return {
        forecastDescription: forecastDescription,
        forecastIcon: forecastIcon,
        forecastTemp: forecastTemp,
        forecastTimeOfDay: 'evening',
      }
    } else {
      [forecastDescription, forecastIcon, forecastTemp, forecastTimeOfDay] = [
        weatherData.daily[1].weather[0].main,
        weatherData.daily[1].weather[0].icon,
        weatherData.daily[1].temp.day,
        'day'
      ]
      return {
        forecastDescription: forecastDescription,
        forecastIcon: forecastIcon,
        forecastTemp: forecastTemp,
        forecastTimeOfDay: forecastTimeOfDay,
      }
    }
  };

  if (Object.keys(weatherData).length === 0) {
  } else {
    weatherDescription = weatherData.current.weather[0].main;
    weatherIcon = weatherData.current.weather[0].icon;
    forecast = findForecast(weatherData, curfew);
  }

  if (Object.keys(locationData).length === 0) {
  } else {
    location = locationData?.results[0].locations[0].adminArea5+', '+locationData?.results[0].locations[0].adminArea3;
  }

  return (
    <div style={styles}>
      <CurrentWeather
        location={location}
        weather={weatherDescription}
        temp={Math.round(weatherData?.current?.temp) + '°F'}
        humidity={weatherData?.current?.humidity}
        windSpeed={Math.round(weatherData?.current?.wind_speed)}
        icon={weatherIcon}
      />
      <Forecast
        forecastWeather={forecast?.forecastDescription}
        forecastTemp={Math.round(forecast?.forecastTemp) + '°F'}
        forecastIcon={forecast?.forecastIcon}
        forecastTimeOfDay={forecast?.forecastTimeOfDay}
      />
    </div>
  )
}

export default Weather;