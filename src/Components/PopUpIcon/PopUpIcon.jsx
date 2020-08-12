import React from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const PopUpIcon = (props) => {

  const {
    tag,
    active,
    onMenuClick,
  } = props;

  const handleClick = () => {
    onMenuClick();
  }

  let activeStyle;

  if (active === true) {
    activeStyle = styles.active;
  } else {
    activeStyle = styles.inactive;
  }

  return (
   <FontAwesomeIcon icon={faBars} style={activeStyle} size="5x" onClick={handleClick}/>
  )  
}

export default PopUpIcon;