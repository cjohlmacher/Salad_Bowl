import React from 'react'
import styles from './styles'

const Event = (props) => {

  const {
    eventName,
    startTime,
    location,
    children,
  } = props;

  
  const timeText = `Start time: ${startTime}`
  

  return (
    <div style={styles}>
      <h2>{eventName}</h2>
      <p>{timeText}</p>
      <p>Location: {location}</p>
      {children}
    </div>
  );
}

export default Event;