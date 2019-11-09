import React from "react";

const ImageCard = props => {
  return(
    <div className="imagesCard">
    <h2>Title: {props.title}</h2>
      <img src={props.url} alt={props.title} />
      <p>Description: {props.description}</p>
      <p>Director: {props.director}</p>
      <p>Release Date: {props.release_date}</p>
    </div>
  )
};

export default ImageCard;
