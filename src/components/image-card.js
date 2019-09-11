import React from "react";

const imgCard = props => {
  return (
    <div className="img-card" key={props.id}>
        <img className="photo-of-the-day-image" alt="random space image" src={props.url} />
        <h1>{props.title}</h1>
        <p>{props.explanation}</p>
    </div>
  );
};

export default imgCard;