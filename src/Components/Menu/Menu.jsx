import React from 'react'
import styles from './styles'

const Menu = (props) => {
  const {
    active,
  } = props;

  let activeStyle;

  if (active === true) {
    activeStyle = styles.active;
  } else {
    activeStyle = styles.inactive;
  }

  return (
    <div style={activeStyle}>
      <p style={styles.text}>Log-out</p>
      <p style={styles.text}>See Friends List</p>
      <p style={styles.text}>Change Filters</p>
      <p style={styles.text}>Change Account Information</p>
    </div>
  )
};

export default Menu;