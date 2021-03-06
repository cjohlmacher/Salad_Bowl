import React from 'react'
import styles from './styles'
import { NavLink } from "react-router-dom";

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
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      <NavLink exact to="/settings" style={styles.link} activeStyle={styles.activeLink}>
        Customization
      </NavLink>
    </div>
  )
};

export default Menu;