import React, { useState } from "react";
import "./Card.css";
import Picture from './Picture.js';
import PictureHeading from "./PictureHeading";
import axios from 'axios';
import styled from 'styled-components';

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  background-color: pink;
  color: green;
  flex-direction: column;
  align-items: center;

  img{
    width: 50%;
    height: auto;

    &:hover{
      border-left: lightgrey 3px solid;
      border-top: grey 2px solid;
    }
  }

  div{
    width: 50%;
    
  }
`

function Card(props) {
    console.log('props inside of CARD');
    console.log(props);

    if(!props.picture) return <h3>loading......</h3>
    
  
    return (<>
    <StyledDetails class='container'>
      <Picture picture={props.picture} />
      <PictureHeading  picture={props.picture}/>
    </StyledDetails>
      </>
  );
}

export default Card;
