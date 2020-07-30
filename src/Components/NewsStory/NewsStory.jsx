import React from 'react';
import styles from './styles';

const NewsStory = (props) => {
    const {
      body,
      children,
    } = props;
  
    return (
      <div style={styles.container}>
        <div style={styles.body} class="body">
          {children}
        </div>
      </div>
    )
  };

  export default NewsStory;