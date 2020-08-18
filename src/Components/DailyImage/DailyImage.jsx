import React, { useState, useEffect } from 'react';
import styles from './styles';
import config from '../../config.js'

const DailyImage = (props) => {
  const {
    children,
  } = props;

  const initialImageCategoryState = 'puppy';
  const initialImageUrl = {
    dailyImageUrl: "https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg",
  };

  const [imageCategoryState, setImageCategoryState] = useState(initialImageCategoryState);
  const [dailyImageData, setDailyImageData] = useState(initialImageUrl);

  useEffect(() => {
    const url = `https://api.unsplash.com/photos/random?query=${imageCategoryState}&featured=true&client_id=${config.UNSPLASH_CLIENT_ID}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setDailyImageData(data);
      });
  }, []);

  return (
    <div>
      <img style={styles.inspoPic} src={dailyImageData?.urls?.regular} />
      <p style={styles.inspoText}>Image credit: {dailyImageData?.user?.name}</p>
    </div>
  )
}

export default DailyImage;