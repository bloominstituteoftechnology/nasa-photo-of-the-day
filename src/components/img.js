import React from 'react';
import styled from "styled-components";

const StyledImg = styled.img`
  width: 50%;
  border: black 15px solid;
  padding: 5%;
  `;
  


const Img = props => {
  console.log(props, " is props in Img")
  return (
    <div className="Img-container">
      <StyledImg src={props.src} className="img" alt="Space"></StyledImg>
    </div>
  );
};


export default Img;