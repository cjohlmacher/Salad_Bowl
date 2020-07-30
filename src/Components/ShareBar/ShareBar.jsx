import React from 'react';
import styles from './styles'

const ShareBar = (props) => {
  const {
    active,
  } = props;

  let activeStyle;

  if (active === true) {
    activeStyle = styles.active;
  } else {
    activeStyle = styles.inactive
  }
  
  return (
    <div style={activeStyle}>
      <p style={styles.text}>Share with a friend...</p>
      <p style={styles.text}>Share on WhatsApp...</p>
      <p style={styles.text}>Share on Facebook...</p>
    </div>
  );
}

export default ShareBar;