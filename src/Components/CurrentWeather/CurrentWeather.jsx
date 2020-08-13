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
    icon,
  } = props

  let imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div style={styles.container}>
      <img src={imgUrl} />
      <h1 style={styles.temperature}>{temp}</h1>
      <p style={styles.details}>Humidity: {humidity}% <br></br>Wind: {windSpeed}mph</p>
    </div>
  );
}

export default CurrentWeather;