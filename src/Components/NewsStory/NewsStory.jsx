import React from 'react';
import styles from './styles';

const NewsStory = (props) => {
    const {
      body,
      children,
    } = props;
  
    return (
      <div style={styles.container}>
        <div class="body">
          {children}
        </div>
      </div>
    )
  };

  export default NewsStory;