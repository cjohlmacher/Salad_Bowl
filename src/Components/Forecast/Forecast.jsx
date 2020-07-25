import React from 'react'
import styles from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

const Forecast = (props) => {
  const {
    forecastWeather,
    forecastTemp,
  } = props;

  let icon = faCloud;

  if (forecastWeather === 'cloudy') {
    icon = faCloud;
  }
  else if (forecastWeather === 'sunny') {
    icon = faCloudSun;
  }
  else if (forecastWeather === 'rain') {
    icon = faCloudShowersHeavy;
  }
  else if (forecastWeather === 'snow') {
    icon = faSnowflake;
  };

  return (
    <div style={styles.container}>
      <h2>Upcoming:</h2>
      <FontAwesomeIcon icon={icon} size='2x' style={styles.weatherIcon}/>
      <h1 style={styles.forecastTemp}>{forecastTemp}</h1>
    </div>
  );
}

export default Forecast;