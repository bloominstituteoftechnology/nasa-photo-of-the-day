import React from "react";

const NasaCard = props => {
  return (
    <div className="nasa-card">
      <h1>{props.title}</h1>
      <h2>Date: {props.date}</h2>
      <p>Photo Description: {props.explanation}</p>
      <img
        src={props.photo}
        alt="a photo of astronaut McCandless floating in space"
      />
    </div>
  );
};

export default NasaCard;
