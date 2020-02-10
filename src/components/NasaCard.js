import React from "react";
import styled from "styled-components";

const Card = styled.div`
  max-width: 500px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover .overlay {
    bottom: 0;
    height: 100%;
  }
`;

const Title = styled.h1`
  color: #444343;
`;

const Pic = styled.img`
  display: block;
  object-fit: contain;
  max-width: 500px;
`;

const Info = styled.h5`
  color: #444343;
  margin: 15px;
`;
const Overlay = styled.div`
  position: absolute;
  bottom: 100%;

  background-color: #444343;
  overflow: hidden;
  width: 500px;
  height: 0;
  transition: 0.5s ease;
`;

const Desc = styled.p`
  text-align: justify;
  margin: 50px;
  color: white;
  font-size: 1em;
  position: absolute;
  overflow: hidden;
`;

const NasaCard = props => {
  // if (!props.photo) return <h3>Loading...</h3>;

  return (
    <Card className="nasa-card">
      <Title>{props.title}</Title>
      <Pic src={props.photo} alt="random photos from Nasa" />
      <Info>Taken by: {props.copyright}</Info>
      <Info>Date: {props.date}</Info>
      <Overlay className="overlay">
        <Desc>PHOTO DESCRIPTION: {props.explanation}</Desc>
      </Overlay>
    </Card>
  );
};

export { NasaCard };
