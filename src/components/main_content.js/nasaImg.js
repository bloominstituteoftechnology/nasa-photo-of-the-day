import React from 'react';

const NasaCard = props => {
  return(
    <div>
      <h2>Date: {props.date}</h2>
      <p>Explanation: {props.explanation} </p>
      <img src={props.hdurl} alt="Space on a certain day"/>
    </div>
  )
}

export default NasaCard;