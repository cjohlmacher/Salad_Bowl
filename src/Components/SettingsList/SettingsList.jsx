import React, { useState, useEffect } from 'react';
import styles from './styles';
import ListItem from '../ListItem';

const SettingsList = (props) => {
  const {
    listItems,
    listHeader,
    type,
    selectHandler,
    containerGrow,
  } = props;

  const listEntries = [];
  const listKeys = Object.keys(listItems);

  for (let i = 0; i < listKeys.length; i++) {
    const currentKey = listItems[listKeys[i]];
    listEntries.push(
      <ListItem
        listHeader={listHeader}
        listValue={listKeys[i]}
        type={type}
        selectHandler={selectHandler}
        checked={currentKey.listed===true}
      />
    );
  };

  const windowStyling = {
    ...styles.window,
    flexBasis: 1,
    flexGrow: containerGrow,
  }

  return (
    <div style={styles.window} style={windowStyling}>
      <h3>{listHeader}</h3>
      <div style={styles.entries}>
        {listEntries}
      </div>
    </div >
  )
};

export default SettingsList;