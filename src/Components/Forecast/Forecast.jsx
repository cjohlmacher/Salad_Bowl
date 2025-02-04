import React from 'react'
import styles from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

const Forecast = (props) => {
  const {
    forecastTemp,
    forecastIcon,
    forecastTimeOfDay,
  } = props;

  let imgUrl = (forecastIcon != undefined) ? `https://openweathermap.org/img/wn/${forecastIcon}@2x.png` : "https://openweathermap.org/img/wn/10d@2x.png";

  let forecastHeader;
  if (forecastTimeOfDay === 'evening') {
    forecastHeader = "Tonight:"
  } else if (forecastTimeOfDay === 'day') {
    forecastHeader = "Tomorrow:"
  } else {
    forecastHeader = "Upcoming:"
  }

  const displayTemp = forecastTemp ? `${Math.round(forecastTemp)}°F` : '--';

  return (
    <div style={styles.container}>
      <h2>{forecastHeader}</h2>
      <img src={imgUrl} />
      <h1 style={styles.forecastTemp}>{displayTemp}</h1>
    </div>
  );
}

export default Forecast;