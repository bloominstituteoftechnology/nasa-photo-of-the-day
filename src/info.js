import React from 'react';
import './index.css';

export default function Info(props) {
  const { copyright, date, explanation, title } = props;

  // console.log(copyright);

  return (
    <div className='text-content container'>
      <h2>{title}</h2>
      <h3>Date: {date}</h3>
      <p>{explanation}</p>
      <h3>©{copyright}</h3>
    </div>
  );
}
