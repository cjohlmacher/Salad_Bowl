import React, { useState, useEffect } from 'react';
import styles from './styles';

const ListItem = (props) => {
  const {
    listHeader,
    type,
    listValue,
    selectHandler,
    checked,
  } = props;

  function handleClick(e) {
    selectHandler(e.target.value);
  };

  return (
    <div style={styles.window}>
      <input type={type} name={listHeader} value={listValue} onClick={(e) => handleClick(e)} checked={checked}/>
      <label>{listValue}</label>
    </div>
  )
};

export default ListItem;