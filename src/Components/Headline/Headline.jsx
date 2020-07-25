import React from 'react'
import styles from './styles'

const Headline = (props) => {
  const {
    title,
    subTitle,
  } = props;

  return (
    <div>
        <h2 style={styles.title}>
        {title}
        </h2>
        <div style={styles.author}>
          Written by {subTitle}
        </div>
    </div>
  );
}

export default Headline;