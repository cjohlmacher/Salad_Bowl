import React, { useState, useEffect } from 'react';
import styles from './styles';
import SettingsList from '../SettingsList';
import { connect } from 'react-redux';

const SettingsBar = (props) => {
  const {
    children,
    newsFilters,
    imageCategory,
    eventFilters,
    handleImageCategorySelection,
  } = props;

  const imageCategoryChoices = ['Puppy', 'Sports', 'Space', 'Flowers'];

  return (
    <div style={styles.window}>
      <SettingsList listHeader="News" listItems={newsFilters} type="checkbox" selectHandler={handleImageCategorySelection} />
      <SettingsList listHeader="Events" listItems={eventFilters} type="checkbox" selectHandler={handleImageCategorySelection} />
      <SettingsList listHeader="Image" listItems={imageCategory} type="radio" selectHandler={handleImageCategorySelection} />
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
      const categorySelect = {
        type: 'CHANGE_IMAGE_CATEGORY',
        payload: category,
      };
      dispatch(categorySelect);
    },
  };
};

const ConnectedSettingsBar = connect(mapStateToProps, mapDispatchToProps)(SettingsBar);

export default ConnectedSettingsBar;