import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.div`
  color: white;
`;

export default function PhotoOfTheDay(props) {
  const { nasaData } = props;
  return (
    <StyledParagraph>
      <img src={nasaData.url} alt={nasaData.title} />
      <p>{nasaData.explanation}</p>
    </StyledParagraph>
  );
}
