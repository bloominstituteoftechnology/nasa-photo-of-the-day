import React from "react";

import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const StyledExplanation = styled.p`
  opacity: 0%;
  font-size: 0.5rem;
  color: black;
  font-weight: ${(props) => (props.bold ? "bold" : "initial")};
  width: 50vw;
  justify-content: space-between;
  text-align: center;

  &:hover {
    font-weight: ${(props) => (props.bold ? "bold" : "initial")};
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  animation: ${kf} 1s ease-in-out forwards;
`;

export default function Explanation(props) {
  const { explanation } = props;

  return (
    <StyledExplanation className="explanation">{explanation}</StyledExplanation>
  );
}
