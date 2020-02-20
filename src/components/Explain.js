import React from 'react';
import styled from "styled-components";

const StyledExplain = styled.p `
  background-color: white;
  padding: 5%;
  margin: 0 10% 10% 10%;
`

const Explain = props => {
  console.log(props, " is props in Explain")
  return (
      <StyledExplain className="explain">{props.explain}</StyledExplain>
  );
};


export default Explain;