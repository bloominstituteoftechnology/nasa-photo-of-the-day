import React from "react";

const Photo = props => {
  return (
    <div className="photo-container">
        <h2>Asteroid of the day is: {props.photoTitle}</h2>
        <img className="apod-image" alt="asteroid" src={props.photoData} />
      
    </div>
  );
};

export default Photo;