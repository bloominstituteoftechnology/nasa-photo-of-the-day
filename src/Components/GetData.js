import React, {useState, useEffect} from React;
import axios from "axios";

function GamepadHapticActuator(){
    axios
    .get(`https://api.nasa.gov/planetary/apod`)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log("Error ", error);
    },[]);
}








