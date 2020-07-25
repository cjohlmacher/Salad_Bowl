import React from 'react'
import styles from './styles'

const FilterBar = (props) => {
  const {
    children,
  } = props;

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default FilterBar;