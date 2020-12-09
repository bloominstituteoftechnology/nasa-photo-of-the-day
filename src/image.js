import React from 'react';
import './index.css';

export default function Image(props) {
  const { url } = props;
  return (
    <div className='image-container container'>
      <img src={url} alt=''></img>
    </div>
  );
}
