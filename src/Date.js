import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const StyledDate = styled.p`
  opacity: 0%;
  color: black;
  background-color: #ffabe1;
  font-weight: ${(props) => (props.bold ? "bold" : "initial")};
  width: 20vw;
  border-radius: 5px;
  justify-content: space-between;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    font-weight: ${(props) => (props.bold ? "bold" : "initial")};
    border-radius: 100%;
    height: 10vw;
    width: 10vw;
    transition: all 1s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  animation: ${kf} 1s ease-in-out forwards;
`;

export default function Date(props) {
  const { date } = props;

  return <StyledDate>Date: {date}</StyledDate>;
}
