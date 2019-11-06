import React from "react";

const NasaCard = props => {
  return (
    <div className="file-list">
      <h2>Nasa Photo Of The Day: {props.title}</h2>
      <img src={props.hdurl} />
      <p>{props.explanation}</p>
      <p>Anything: {props.date}</p>
      <p>Anything {props.title}</p>
    </div>
  );
};
export default NasaCard;
