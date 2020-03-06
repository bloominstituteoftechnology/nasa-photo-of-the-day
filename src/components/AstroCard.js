import React from "react";
import styled from "styled-components";

const SpaceImg = styled.img`
  width: 50%;
`;

const AstroCard = props => {
  return (
    <li className="astro-card" key={props.id}>
      <SpaceImg src={props.image} alt={props.alt} />
      <h1>{props.title}</h1>
      <h2>Date: {props.date} </h2>
      <p>{props.explanation}</p>
    </li>
  );
};

export default AstroCard;
