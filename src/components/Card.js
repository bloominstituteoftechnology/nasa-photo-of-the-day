import React from "react";

const Card = props => {
  return (
    <div className="astronomyCard">
      <p className="date">For {props.date}</p>
      <div className="imageDiv">
        <img
          className="astronomyImg"
          alt="astronomy picture"
          src={props.imgUrl}
        />
      </div>
      <h1>{props.title}</h1>
      <p>{props.description} </p>
    </div>
  );
};

export default Card;
