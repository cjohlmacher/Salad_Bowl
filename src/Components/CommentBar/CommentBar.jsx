import React from 'react'
import styles from './styles'

const CommentBar = (props) => {
  const {
    active,
  } = props;

  let activeStyle;

  if (active === true) {
    activeStyle = styles.active;
  } else {
    activeStyle = styles.inactive
  }

  return (
    <div>
      <input style={activeStyle} type="text">
      </input>
    </div>
  );
}

export default CommentBar;