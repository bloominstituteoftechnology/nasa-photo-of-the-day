import React from 'react';
import styled from "styled-components";

import "./frame.css";

// const StyledImg = styled.img`
//   width: 50%;
//   border: black 15px solid;
//   padding: 5%;
//   background-color: white;
//   `;
  


const Img = props => {
  console.log(props, " is props in Img")
  return (
    <div className="frame">
      <img src={props.src} className="img" alt="Space"></img>
    </div>
  );
};


export default Img;