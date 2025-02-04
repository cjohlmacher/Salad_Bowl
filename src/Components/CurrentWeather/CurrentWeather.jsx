import React from 'react'
import styles from './styles'

//Alternate icons:
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
*/

const CurrentWeather = (props) => {
  const {
    location,
    temp,
    humidity,
    windSpeed,
    icon,
  } = props

  let imgUrl = (icon != undefined) ? `https://openweathermap.org/img/wn/${icon}@2x.png` : 'https://openweathermap.org/img/wn/10d@2x.png';

  const displayTemp = temp ? `${Math.round(temp)}°F` : '--';
  const displayHumidity = humidity || '--';
  const displayWindSpeed = windSpeed ? `${Math.round(windSpeed)}` : '--';
  
  return (
    <div style={styles.container}>
      <div style={styles.location}>
        <h2 style={styles.temperature}>{location}</h2>
      </div>
      <div style={styles.subcontainer}>
        <img src={imgUrl} />
        <h1 style={styles.temperature}>{displayTemp}</h1>
        <p style={styles.details}>Humidity: {displayHumidity}% <br></br>Wind: {displayWindSpeed}mph</p>
      </div>
    </div>
  );
}

export default CurrentWeather;