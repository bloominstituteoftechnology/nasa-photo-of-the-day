import React from "react";
import styled from "styled-components";

const SpaceLi = styled.li`
  background-color: #27276d;
`;

const SpaceImg = styled.img`
  width: 70%;
  margin-top: 10%;
  border-radius: 5px;
  border: 2px solid #87619d;
`;

const SpaceTitle = styled.h1`
  color: white;
`;

const Subheading = styled.h2`
  color: white;
`;

const AstroExplainer = styled.p`
  text-align: left;
  color: white;
  font-size: 20px;
`;

const AstroCard = props => {
  return (
    <SpaceLi className="astro-card" key={props.id}>
      <SpaceImg src={props.image} alt={props.alt} />
      <SpaceTitle>{props.title}</SpaceTitle>
      <Subheading> {props.date} </Subheading>
      <AstroExplainer>{props.explanation}</AstroExplainer>
    </SpaceLi>
  );
};

export default AstroCard;
