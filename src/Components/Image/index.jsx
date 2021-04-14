import React from 'react';
import './index.css';

const Image = (props) => {

  const { url } = props;

  return (
    <div className="Image">
      <a href={url}>
        <img src={url} alt='NASA' />
      </a>
    </div>
  );

};

export default Image;
