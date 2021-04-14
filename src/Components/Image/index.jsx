import React from 'react';
import './index.css';

const Image = (data) => {

  const { url } = data;

  return (
    <div className="Image">
      <a href={url}>
        <img src={url} alt='NASA' />
      </a>
    </div>
  );

};

export default Image;