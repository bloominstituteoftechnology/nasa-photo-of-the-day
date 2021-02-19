import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  opacity: 0%;
  width: 40%;
  justify-content: space-between;
  border-radius: 3px;

  &:hover {
    transform: scale(1.3);
    padding: 5%;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  animation: ${kf} 1s ease-in-out forwards;
`;

export default function Image(props) {
  const { url } = props;

  return <StyledImg src={url} />;
}
