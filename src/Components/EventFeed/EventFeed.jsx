import React from 'react'
import styles from './styles'

const EventFeed = (props) => {
  const {
    children,
  } = props;

  return (
    <div style={styles}>
      <h1>Events</h1>
      {children}
    </div>
  );
}

export default EventFeed;