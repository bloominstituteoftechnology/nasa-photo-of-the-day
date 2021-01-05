import React from "react";
import styled from "styled-components";

const ImageExplanation = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  padding: 2%;
`;

export default function Description(props) {
  const { explanationData } = props;
  return (
    <ImageExplanation>
      <p>{explanationData}</p>
    </ImageExplanation>
  );
}
