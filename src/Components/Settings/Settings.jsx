import React, { useState, useEffect } from 'react';
import styles from './styles';
import Banner from '../Banner';
import SettingsBar from '../SettingsBar';

const Settings = (props) => {
  const {
    children,
  } = props;

  return (
    <div style={styles.container}>
      <div style={styles.window}>
        <div>
          <Banner headline="Custom Settings" />
        </div>
        <SettingsBar />
      </div>
    </div>
  )
};

export default Settings;