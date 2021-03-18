import React from 'react';

const PhotoInfo = props => {
  const { photoData } = props;

  return (
    <div>
      <p>{photoData.explanation}</p>
      <p>{photoData.copyright}</p>
      <p>{photoData.date}</p>
    
    </div>   
  );
};

export default PhotoInfo;
