/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import axios from "axios";



export default function NasaPic(){

const [pics, setPics] =useState([]);

const effectFn =() =>{
    axios
    .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY")
   .then(response => {
    console.log(response.data);
    setPics(response.data)

   });
}

useEffect(effectFn, []);

return (
    <div className="pictures">
    
    </div>
    );


}