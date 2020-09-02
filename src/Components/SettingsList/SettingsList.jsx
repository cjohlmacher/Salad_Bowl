import React, { useState, useEffect } from 'react';
import styles from './styles';
import ListItem from '../ListItem';

const SettingsList = (props) => {
  const {
    listItems,
    listHeader,
    type,
    selectHandler,
  } = props;

  const listEntries = [];

  for (let i = 0; i < Object.keys(listItems).length; i++) {
    listEntries.push(
      <ListItem
        listHeader={listHeader}
        listValue={Object.keys(listItems)[i]}
        type={type}
        selectHandler={selectHandler}
      />
    );
  };

  return (
    <div style={styles.window}>
      <h3>{listHeader}</h3>
      {listEntries}
    </div>
  )
};

export default SettingsList;