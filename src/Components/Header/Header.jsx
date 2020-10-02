import React from 'react';
import styles from './styles';
import Banner from '../Banner';

const Header = (props) => {
  const {
    children,
    headline,
  } = props;

  return (
    <header style={styles}>
      {children}
      <Banner headline={headline} />
    </header>
  )
}

export default Header;