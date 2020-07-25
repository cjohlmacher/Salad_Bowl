import React from 'react'
import styles from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

const CurrentWeather = (props) => {
  const {
    weather,
    temp,
    humidity,
    windSpeed,
  } = props

  let icon = faCloud

  if (weather === 'cloudy') {
    icon = faCloud;
  }
  else if (weather === 'sunny') {
    icon = faCloudSun;
  }
  else if (weather === 'rain') {
    icon = faCloudShowersHeavy;
  }
  else if (weather === 'snow') {
    icon = faSnowflake;
  };

  return (
    <div style={styles.container}>
      <FontAwesomeIcon icon={icon} size='5x' style={styles.weatherIcon}/>
      <h1 style={styles.temperature}>{temp}</h1>
      <p style={styles.details}>Humidity: {humidity}% <br></br>Wind: {windSpeed}mph</p>
    </div>
  );
}

export default CurrentWeather;