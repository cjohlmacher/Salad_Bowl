import React from 'react'
import styles from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare as farPlusSquare } from '@fortawesome/free-regular-svg-icons';

const ResponseButton = (props) => {
  const {
    type,
    onResponseButtonPress,
    active,
  } = props;

  let icon;
  let activeStyle;

  if (type === 'comment') {
    icon = faComment;
    activeStyle = styles.base
  }
  else if (type === 'share') {
    icon = faShareAlt;
    activeStyle = styles.base
  }
  else if (type === 'rsvp' & active === true) {
    icon = faPlusSquare;
    activeStyle = styles.base
  }
  else if (type === 'rsvp' & active === false) {
    icon = farPlusSquare;
    activeStyle = styles.baseRsvp
  }
  else {
    icon = faComment;
  }

  const handleClick = () => {
    onResponseButtonPress();
  };

  return (
    <div>
      <FontAwesomeIcon icon={icon} style={activeStyle} size="2x" onClick={handleClick}/>
    </div>
  );
}

export default ResponseButton;