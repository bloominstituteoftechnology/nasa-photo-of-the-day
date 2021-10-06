import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

import "./App.css";
 
function Img (props){
   const {img}=props
   return(
    <img src={img} ></img>
   )
}

export default Img