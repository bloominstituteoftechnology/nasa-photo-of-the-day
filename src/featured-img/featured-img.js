import React from 'react';
import './featured-img.css';

const FeaturedImg = (props) => {
  const { copyright, title, explanation, url } = props.image
  return (
    <div className="featured-img">
      <div className="image-text">
        <ul>
          <li>Copyright: {copyright}</li>
          <li>Title: {title}</li>
          <li>Explanation: {explanation}</li>
        </ul>
      </div>
      <div className="img-container">
        <img src={url} alt='Great Conjunction over Sicilian Lighthouse'/>
      </div>
    </div>


  );
};

export default FeaturedImg