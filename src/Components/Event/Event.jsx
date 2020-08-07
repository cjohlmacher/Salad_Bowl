import React from 'react'
import styles from './styles'
import CommunityBar from '../CommunityBar'
import ResponseButton from '../ResponseButton'
import CommentBar from '../CommentBar'
import ShareBar from '../ShareBar'
import InteractionCounter from '../InteractionCounter'

const Event = (props) => {

  const {
    eventName,
    startTime,
    location,
    children,
    eventId,
    attendees,
    commentBarActive,
    shareBarActive,
    handleRsvpButtonPress,
    handleCommentButtonPress,
    handleShareButtonPress,
    rsvpState,
  } = props;


  const timeText = `Start time: ${startTime}`


  return (
    <div style={styles}>
      <h2>{eventName}</h2>
      <p>{timeText}</p>
      <p>Location: {location}</p>
      {children}
      <CommunityBar>
        <InteractionCounter count={attendees} type='event' />
        <ResponseButton
          type='rsvp'
          onResponseButtonPress={handleRsvpButtonPress}
          active={rsvpState[0]}
        />
        <ResponseButton
          type='comment'
          onResponseButtonPress={handleCommentButtonPress}
        />
        <ResponseButton
          type='share'
          onResponseButtonPress={handleShareButtonPress}
        />
      </CommunityBar>
      <CommentBar
        active={commentBarActive}
      />
      <ShareBar
        active={shareBarActive}
      />
    </div>
  );
}

export default Event;