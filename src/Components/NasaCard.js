import React from "react";

const NasaCard = props => {
  return (
    <div key={props.id}>
      <h2>Title: {props.title}</h2>
      <h2>Date: {props.date}</h2>
      <p>{props.explanation}</p>
    </div>
  );
};

export default NasaCard;
