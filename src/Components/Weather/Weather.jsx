import React, { useState, useEffect } from 'react'
import styles from './styles'
import CurrentWeather from '../CurrentWeather'
import Forecast from '../Forecast'
import config from '../../config.js'

const Weather = (props) => {
  const {
    children,
  } = props;

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.804371&lon=-122.270798&units=imperial&exclude=minutely,hourly&appid=${config.OPEN_WEATHER_MAP_CLIENT_ID}`

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setWeatherData(data);
      });
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

  return (
    <div style={styles}>
      <CurrentWeather
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