import React from 'react';

const Card = ({ copyright, date, explanation, title, imgUrl }) => {
  return (
    <div className='card'>
      <img className='image' src={imgUrl}/>
      <div className='info'>
        <div className='titleDate'>
          <h2 className='title'>{title}</h2>
          <p className='date'>{date}</p>
        </div>
        <p className='explanation'>{explanation}</p>
        <p className='copyright'>{copyright}</p>
      </div>
    </div>
  );
};

export default Card;