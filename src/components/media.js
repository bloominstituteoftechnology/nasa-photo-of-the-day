import React from "react";
import styled from "styled-components";

export default function Media(props) {
  return (
    <StyledDiv>
      <h1>{props.title}</h1>
      <img src={props.url} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  h1 {
    font-size: 2rem;
    color: red;
  }
  img {
    width: 90%;
  }
`;
