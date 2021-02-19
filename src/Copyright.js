import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const StyledCopyright = styled.p`
  opacity: 0%;
  background-color: #ffabe1;
  color: black;
  font-weight: ${(props) => (props.bold ? "bold" : "initial")};
  width: 25vw;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  justify-content: space-between;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    font-weight: ${(props) => (props.bold ? "bold" : "initial")};
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  animation: ${kf} 1s ease-in-out forwards;
`;

export default function Copyright(props) {
  const { copyright } = props;

  return (
    <StyledCopyright bold={"bold"}> Copyrights: {copyright}</StyledCopyright>
  );
}
