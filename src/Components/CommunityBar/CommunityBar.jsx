import React from 'react'
import styles from './styles'

const CommunityBar = (props) => {
  const {
    children,
  } = props;

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default CommunityBar;