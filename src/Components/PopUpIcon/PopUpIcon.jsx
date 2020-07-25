import React from 'react';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const PopUpIcon = (props) => {

  const {
    tag,
  } = props;

  return (
   <FontAwesomeIcon icon={faBars} style={styles} size="5x"/>
  )  
}

export default PopUpIcon;