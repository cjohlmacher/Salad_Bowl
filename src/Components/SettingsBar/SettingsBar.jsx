import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './styles';
import SettingsList from '../SettingsList';
import { changeImageCategory } from '../../redux/actions/imageCategory';
import { toggleEventsListed } from '../../redux/actions/eventsFilters';
import { toggleNewsListed } from '../../redux/actions/newsFilters';

const SettingsBar = (props) => {
  const {
    children,
    newsFilters,
    imageCategory,
    eventFilters,
    handleImageCategorySelection,
    handleEventCategorySelection,
    handleNewsCategorySelection,
  } = props;

  return (
    <div style={styles.window}>
      <SettingsList listHeader="News" listItems={newsFilters} type="checkbox" selectHandler={handleNewsCategorySelection} containerGrow={1} />
      <SettingsList listHeader="Events" listItems={eventFilters} type="checkbox" selectHandler={handleEventCategorySelection} containerGrow={2} />
      <SettingsList listHeader="Image" listItems={imageCategory} type="radio" selectHandler={handleImageCategorySelection} containerGrow={1} />
    </div>
  )
};

function mapStateToProps(state) {
  const newsFilters = state.newsFilters;
  const imageCategory = state.imageCategory;
  const eventFilters = state.eventFilters;
  return {
    newsFilters,
    imageCategory,
    eventFilters,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleImageCategorySelection(category) {
      dispatch(changeImageCategory(category));
    },
    handleEventCategorySelection(category) {
      dispatch(toggleEventsListed(category));
    },
    handleNewsCategorySelection(category) {
      dispatch(toggleNewsListed(category));
    },
  };
};

const ConnectedSettingsBar = connect(mapStateToProps, mapDispatchToProps)(SettingsBar);

export default ConnectedSettingsBar;