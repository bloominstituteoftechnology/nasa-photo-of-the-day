import React from 'react';
import styled from "styled-components";


const StyledTitle = styled.h1`
  background: white;
  color: black;
  width: 50%;
  padding: 3%;
  `;

const Title = props => {
  console.log(props, " is props in Title")
  return (
    <div className="Title-container">
      <StyledTitle className="title">{props.title}</StyledTitle>
    </div>
  );
};


export default Title;
