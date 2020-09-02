import React from 'react'
import styles from './styles'

const Headline = (props) => {
  const {
    title,
    subTitle,
    storyUrl,
  } = props;

  let authorStyle;

  if (subTitle === null || subTitle === "") {
    authorStyle = styles.hidden;
  } else {
    authorStyle = styles.author;
  };

  return (
    <div>
      <h2 style={styles.title}>
        <a href={storyUrl} target='#blank' style={styles.url}>{title}</a>
      </h2>
      <div style={authorStyle}>
        Written by {subTitle}
      </div>
    </div>
  );
}

export default Headline;