import React from 'react';
import styles from './styles';

const Banner = (props) => {
  const {
    headline,
  } = props;

  return (
    <h1 style={styles}>{headline}</h1>
  );
}

export default Banner;