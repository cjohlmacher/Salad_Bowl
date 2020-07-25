import React from 'react'
import styles from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const ResponseButton = (props) => {
  const {
    type,
  } = props;

  let icon;
  if (type === 'comment') {
    icon = faComment;
  }
  else if (type === 'share') {
    icon = faShareAlt;
  }
  else if (type === 'rsvp') {
    icon = faPlusSquare;
  }
  else {
    icon = faComment;
  }

  return (
    <div>
      <FontAwesomeIcon icon={icon} style={styles} size="2x"/>
    </div>
  );
}

export default ResponseButton;