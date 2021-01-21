import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1)
  }
  `;

const StyledHeader = styled.div`
  h1 {
    opacity: 0%;
    animation: ${kf} 3s ease-in-out forwards;
    color: ${(pr) => pr.theme.primaryColor};
  }
  p {
    opacity: 0%;
    animation: ${kf} 5s ease-in-out forwards;
    color: ${(pr) => pr.theme.white};
  }
`;

export default function Header(props) {
  const { nasaData } = props;
  return (
    <StyledHeader>
      <h1>NASA Photo of the Day</h1>
      <p>{nasaData.date}</p>
      <p>{nasaData.title}</p>
    </StyledHeader>
  );
}
