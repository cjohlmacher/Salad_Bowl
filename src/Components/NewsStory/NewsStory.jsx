import React from 'react';
import styles from './styles';
import Headline from '../Headline';
import InteractionCounter from '../InteractionCounter';
import MainStory from '../MainStory';
import ResponseButton from '../ResponseButton';
import CommentBar from '../CommentBar';
import ShareBar from '../ShareBar';
import CommunityBar from '../CommunityBar';

const NewsStory = (props) => {
  const {
    headlineTitle,
    headlineSubtitle,
    mainStorySummary,
    interactionCount,
    commentBarActive,
    shareBarActive,
    handleCommentButtonPress,
    handleShareButtonPress,
  } = props;

  return (
    <div style={styles.container}>
      <div style={styles.body} class="body">
        <Headline title={headlineTitle} subTitle={headlineSubtitle} />
        <MainStory summary={mainStorySummary} />
        <CommunityBar>
          <InteractionCounter count={interactionCount} type='news' />
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
    </div>
  )
};

export default NewsStory;