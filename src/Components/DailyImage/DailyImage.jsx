import React, { useState, useEffect } from 'react';
import styles from './styles';
import { connect } from 'react-redux';

const DailyImage = (props) => {
  const {
    children,
    imageCategory,
  } = props;

  const initialImageUrl = {
    dailyImageUrl: "https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg",
  };

  const [dailyImageData, setDailyImageData] = useState(initialImageUrl);
  let activeImageCategory;

  const imageCategories = Object.keys(imageCategory);
  for (let i = 0; i < imageCategories.length; i++) {
    if (imageCategory[imageCategories[i]].listed === true) {
      activeImageCategory = imageCategories[i];
    };
  };

  useEffect(() => {
    const url = `https://api.unsplash.com/photos/random?query=${activeImageCategory}&featured=true&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setDailyImageData(data);
      });
  }, []);

  return (
    <div style={styles.container}>
      <img style={styles.inspoPic} src={dailyImageData?.urls?.regular} />
      <p style={styles.inspoText}>Image credit: {dailyImageData?.user?.name}</p>
    </div>
  )
};

function mapStateToProps(state) {
  const imageCategory = state.imageCategory;
  return {
    imageCategory,
  };
};

const ConnectedDailyImage = connect(mapStateToProps)(DailyImage);
export default ConnectedDailyImage;