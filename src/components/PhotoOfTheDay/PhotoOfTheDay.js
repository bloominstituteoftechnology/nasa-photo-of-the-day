import React from 'react';
// import ReactDOM from 'react-dom';
import './PhotoOfTheDay.css';

const PhotoOfTheDay = ({ date, title, url, explanation, copyright }) => {
  // console.log(title);
  return (
    <div className='image'>
      <div>
        <img src={url} alt='Nasa' />
      </div>
      <div className='h2'>Date: {date}</div>
      <span className='endText'>By: {copyright}</span>

      <div className='title'>{title}</div>
      <div>
        <p className='drop-cap'>{explanation}</p>
      </div>
    </div>
  );
};

export default PhotoOfTheDay;
