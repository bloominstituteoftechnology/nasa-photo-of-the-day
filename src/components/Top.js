import React from "react";
import styled from "styled-components";

const TopContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  padding-top: 3em;
  width: 100%;
  text-align: center;
  color: white;
`;

const Top = props => {
  console.log(props.data);
  return (
    <TopContainer>
      <h3>{props.data.title}</h3>

      <p> {props.data.date}</p>
    </TopContainer>
  );
};

export default Top;
