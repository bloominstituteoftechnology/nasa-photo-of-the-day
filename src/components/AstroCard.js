import React from "react";

const AstroCard = props => {
  return (
    <li className="astro-card" key={props.id}>
      <img src={props.image} alt={props.alt} />
      <h1>{props.title}</h1>
      <h2>Date: {props.date} </h2>
      <p>{props.explanation}</p>
    </li>
  );
};

export default AstroCard;
