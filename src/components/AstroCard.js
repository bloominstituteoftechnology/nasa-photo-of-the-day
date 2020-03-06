import React from "react";

const AstroCard = props => {
  return (
    <li className="astro-card" key={props.id}>
      <img>{props.hdurl}</img>
      <h1>Today's Picture: {props.title}</h1>
      <h2>Date: {props.date} </h2>
      <p>{props.explanation}</p>
    </li>
  );
};

export default AstroCard;
