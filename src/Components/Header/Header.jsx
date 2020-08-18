import React from 'react';
import styles from './styles';
import Banner from '../Banner';

const Header = (props) => {
  const {
    children,
  } = props;

  return (
    <header style={styles}>
      {children}
      <Banner headline="SaladBowl: Fresh News and Events" />
    </header>
  )
}

export default Header;