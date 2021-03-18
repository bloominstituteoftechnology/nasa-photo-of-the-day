import React from 'react';
import './Photos.css';
import PhotoInfo from "./PhotoInfo";


const Photo = props => {
  const { photoData } = props;

  return (
    <div className='post-border'>
      <h1>{photoData.title}</h1>
      <div className='post-image-wrapper'>
        <img
          alt='Nasa Photo of the Day'
          className='post-image'
          src={photoData.url}
        />
      </div>
      <PhotoInfo photoData={photoData} />
    </div>
  );
};

export default Photo;
