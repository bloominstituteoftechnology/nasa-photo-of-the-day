import React from 'react';

const Nasa = (props) => {
  return (
    <div>
      <h1>NASA PHOTO OF THE DAY!</h1>
      <img src={props.nasaData.url} alt="Nasa APOD" />
      <p>{props.nasaData.date}</p>
      <p>{props.nasaData.explanation}</p>
      <p>{props.nasaData.copyright}</p>
    </div>
  )
}

export default Nasa;



