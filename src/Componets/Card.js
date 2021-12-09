import React, { useState } from "react";
import "./Card.css";
import Picture from './Picture.js';
import PictureHeading from "./PictureHeading";
import axios from 'axios';

function Card(props) {
    console.log('props inside of CARD');
    console.log(props);

    if(!props.picture) return <h3>loading......</h3>
    
  
    return (<>
      <Picture picture={props.picture} />
      <PictureHeading  picture={props.picture}/>
      </>
  );
}

export default Card;
