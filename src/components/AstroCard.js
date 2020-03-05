import React from "react";

const AstroCard = props => {
  return (
    <li className="astro-card" key={props.id}>
      <img>{props.img}</img>
      <h2>Today's Picture: {props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
};

export default AstroCard;
