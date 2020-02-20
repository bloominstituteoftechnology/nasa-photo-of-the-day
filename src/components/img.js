import React from 'react';
import styled from "styled-components";

import "./frame.css";



const Img = props => {
  console.log(props, " is props in Img")
  return (
    <div className="frame">
      <img src={props.src} className="img" alt="Space"></img>
    </div>
  );
};


export default Img;