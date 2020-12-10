import React from 'react';
import './featured-img.css';

const FeaturedImg = (imageData) => {
  const imageDetails = imageData;

  return (
    <div className="featured-img">
      <div className="image-text">
        <ul>
  <li>Copyright: {imageDetails.copyright}</li>
  <li>Title: {imageDetails.title}</li>
  <li>Explanation: {imageDetails.explanation}</li>
        </ul>
      </div>
      <div className="img-container">

      </div>
    </div>


  );
};

export default FeaturedImg