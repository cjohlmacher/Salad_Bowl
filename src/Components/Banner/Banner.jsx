import React from 'react';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';

const Banner = (props) => {
  const {
    headline,
    tagline,
  } = props;

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>{headline}  <FontAwesomeIcon icon={faSpa} style={styles.icon} size="1x"/>  {tagline}</h1>
    </div>
  );
}

export default Banner;