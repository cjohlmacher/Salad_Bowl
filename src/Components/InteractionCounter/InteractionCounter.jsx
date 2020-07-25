import React from 'react'
import styles from './styles'

const InteractionCounter = (props) => {
  const {
    count,
    type,
  } = props;

  let viewsText;
  if (count === 0) {
    if (type === 'event') {
      viewsText = `Nobody is attending this event yet.`
    }
    else if (type === 'news') {
      viewsText = "Nobody has read this yet!";
    }
  }
  else if (count === 1) {
    if (type === 'event') {
      viewsText = `${count} person is attending this event so far!`
    }
    else if (type === 'news') {
      viewsText = `${count} person has read this!`;
    }
  }
  else {
    if (type === 'event') {
      viewsText = `${count} people are attending this event so far!`
    }
    else if (type === 'news') {
      viewsText = `${count} people have read this!`;
    }
  }

  return (
    <div>
      {viewsText}
    </div>
  );
}

export default InteractionCounter;