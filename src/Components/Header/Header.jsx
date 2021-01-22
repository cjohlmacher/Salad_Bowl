import React from 'react';
import styles from './styles';
import Banner from '../Banner';

const Header = (props) => {
  const {
    children,
    headline,
    tagline,
  } = props;

  return (
    <header style={styles}>
      {children}
      <Banner headline={headline} tagline={tagline} />
    </header>
  )
}

export default Header;