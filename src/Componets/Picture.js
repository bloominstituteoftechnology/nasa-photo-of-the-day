import React, { useState } from "react";
import "./Picture.css";
import axios from 'axios';

function Picture(props) {

    // if(!props.image.url) return <h3>loading......</h3>
    console.log('props inside of Picture');
    console.log(props);
  
    return (
      <img src={props.picture.url}/> 
  );
}

export default Picture;
