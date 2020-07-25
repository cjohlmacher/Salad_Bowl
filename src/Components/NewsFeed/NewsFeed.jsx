import React from 'react'
import styles from './styles'

const NewsFeed = (props) => {
  const {
    children,
  } = props;

  return (
    <div style={styles}>
      <h1>News Feed</h1>
      {children}
    </div>
  )
}

export default NewsFeed;