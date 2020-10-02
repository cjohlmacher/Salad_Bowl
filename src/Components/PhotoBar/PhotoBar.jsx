import React from 'react';
import styles from './styles';

const PhotoBar = (props) => {
  const {
    children,
  } = props;

  return (
    <header style={styles}>
      {children}
    </header>
  )
}

export default PhotoBar;