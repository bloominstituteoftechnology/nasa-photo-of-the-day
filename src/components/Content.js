import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const StyledContent = styled.div`
  width: ${(pr) => pr.theme.width};
  margin: 0 auto;
  h2 {
    font-size: 2rem;
    opacity: 0;
    animation: ${kf} 1.5s forwards;
    animation-delay: 1.5s;
  }
  h3 {
    font-size: 1.5rem;
    opacity: 0;
    animation: ${kf} 1.5s forwards;
    animation-delay: 3s;
  }
  p {
    color: ${(pr) => pr.theme.primaryColor};
    font-size: 1.25rem;
    opacity: 0;
    animation: ${kf} 1.5s forwards;
    animation-delay: 4.5s;
    font-size: 1.25rem;
  }
`;

const StyledText = styled.div`
  color: ${(pr) => pr.theme.secondaryColor};
  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.1s ease-in-out;
    color: ${(pr) => pr.theme.primaryColor};
  }
`;

export default function Content(props) {
  const { content } = props;

  if (!content) return <h3>Loading...</h3>;

  return (
    <StyledContent>
      <div>
        <StyledText>
          <h2>{content.title}</h2>
        </StyledText>
        <StyledText>
          <h3>{content.date}</h3>
        </StyledText>
        <p>{content.explanation}</p>
      </div>
    </StyledContent>
  );
}
