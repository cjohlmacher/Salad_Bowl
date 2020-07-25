import React from 'react'
import styles from './styles'

const MainStory = (props) => {
  const {
    summary,
  } = props;

  return (
    <div style={styles}>
      {summary}
    </div>
  );
}

export default MainStory;