import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
    100%{
        opacity: 1;
    }
`;

const RoverCardContainer = styled.div`
  opacity: 0;
  animation: ${kf} 0.75s ease-in-out forwards;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-around;
  width: 80%;
  margin: 5% auto;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 5px 10px 20px #2e2e2e;
  background-color: #4e4e4e;
  font-weight: 100;
  font-size: 1rem;
  color: #fff;

  &:hover {
    box-shadow: 5px 10px 40px #2f4f4f;
    transition: 0.75s ease-in-out;
  }
  transition: 0.75s ease-in-out;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0%;
  } ;
`;

const RoverImageContainer = styled.div`
  max-width: 15%;
  padding: 5%;
`;

const RoverCardImage = styled.img`
  max-width: 100%;
  padding: 5%;
`;

export default function RoverCard(props) {
  const { data, date } = props;
  return (
    <>
      <RoverCardContainer>
        <div>
          <h2>Rover Camera</h2>
          <span>{date}</span>
        </div>
        {data.map((photo) => {
          return (
            <RoverImageContainer>
              <h3>{photo.camera.full_name}</h3>
              <RoverCardImage key={photo.id} src={photo.img_src} />
            </RoverImageContainer>
          );
        })}
      </RoverCardContainer>
    </>
  );
}
