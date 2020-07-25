import React from 'react'
import styles from './styles'

const Filter = (props) => {
  const {
    topic,
    active,
  } = props;

  let styleFilter;

  if (active === true) {
    styleFilter = styles.active;
  }
  else {
    styleFilter = styles.inactive;
  }

  return (
    <div style={styleFilter}>
      <p style={styles.text}>{topic}</p>
    </div>
  );
}

export default Filter;