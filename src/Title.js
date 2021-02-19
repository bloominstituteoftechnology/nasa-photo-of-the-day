import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const StyledTitle = styled.h1`
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #6155a6;
  border-radius: 10px;
  padding: 5px;
  color: white;
  opacity: 0%;
  font-weight: ${(props) => (props.bold ? "bold" : "initial")};
  width: 40vw;
  justify-content: space-between;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    width: 80vw;
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  animation: ${kf} 1s ease-in-out forwards;
`;
export default function Title(props) {
  const { title } = props;

  return <StyledTitle className="Title">{title}</StyledTitle>;
}
