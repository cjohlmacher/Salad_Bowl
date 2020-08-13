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
    forecastIcon,
    forecastTimeOfDay,
  } = props;

  let imgUrl = `http://openweathermap.org/img/wn/${forecastIcon}@2x.png`;

  let forecastHeader;
  if (forecastTimeOfDay === 'evening') {
    forecastHeader = "Tonight:"
  } else if (forecastTimeOfDay === 'day') {
    forecastHeader = "Tomorrow:"
  } else {
    forecastHeader = "Upcoming:"
  }

  return (
    <div style={styles.container}>
      <h2>{forecastHeader}</h2>
      <img src={imgUrl} />
      <h1 style={styles.forecastTemp}>{forecastTemp}</h1>
    </div>
  );
}

export default Forecast;