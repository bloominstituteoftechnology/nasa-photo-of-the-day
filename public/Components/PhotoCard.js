import React from "react";

const PhotoCard = (props) => {
  return (
    <div className="film-list">
      <h2> Title: {props.title} </h2>
      <p>Description: {props.description}</p>
      <div className="bottom">
        <p>explanation: {props.explanation} </p>
        <p>image: {props.url} </p>
      </div>
    </div>
  );
};
export default PhotoCard;