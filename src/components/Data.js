import React from "react";
import styled from "styled-components";

const StyledDataDiv = styled.div`
  width: 75%;
  margin: 10px auto;
  padding: 2%;
  max-width: 800px;
  color: white;
`;

const StyledP = styled.p`
  text-align: center;
`;
const StyledH2 = styled.h2`
  color: white;
`;
const StyledH3 = styled.h3`
  color: white;
`;

function Data(props) {
  return (
    <StyledDataDiv>
      <StyledH2>{props.title}</StyledH2>
      <StyledH3>{props.date}</StyledH3>
      <StyledP>{props.about}</StyledP>
    </StyledDataDiv>
  );
}

export default Data;
