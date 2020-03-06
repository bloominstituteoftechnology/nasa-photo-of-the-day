import React from "react";
import styled from "styled-components";

const SpaceImg = styled.img`
  width: 80%;
  border-radius: 5px;
  border: 2px solid green;
`;

const Subheading = styled.h2`
  color: red;
`;

const AstroExplainer = styled.p`
  text-align: left;
`;

const AstroCard = props => {
  return (
    <li className="astro-card" key={props.id}>
      <SpaceImg src={props.image} alt={props.alt} />
      <h1>{props.title}</h1>
      <Subheading> {props.date} </Subheading>
      <AstroExplainer>{props.explanation}</AstroExplainer>
    </li>
  );
};

export default AstroCard;
