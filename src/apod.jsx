import React from "react";

const Apod = props => {
  return (
    <div className="apod-card">
      <h2>{props.title}</h2>
      <img className="apod-img" alt="NASA" src={props.url}/>
      <h2>{props.date}</h2>
      <p>{props.explanation}</p>
    </div>
  );
};

export default Apod;
