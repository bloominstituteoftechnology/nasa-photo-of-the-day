import React from 'react';
import '../main_content.js/main.css';

const NasaCard = props => {
  return(
    <div>
      <h2>Date: {props.date}</h2>
      <img className='imgDay' src={props.hdurl} alt="Space on a certain day"/>
      <p>Explanation: {props.explanation} </p>
    </div>
  )
}

export default NasaCard;