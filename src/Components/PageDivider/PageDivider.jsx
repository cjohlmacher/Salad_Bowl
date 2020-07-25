import React from 'react'
import styles from './styles'

const PageDivider = (props) => {
  const {
    children,
  } = props;

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default PageDivider;