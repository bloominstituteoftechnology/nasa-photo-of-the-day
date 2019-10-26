import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

export default function NasaPicList() {
   const [image, setImage] = useState([]);

   useEffect(() => {

    axios
         .get("https://api.nasa.gov/planetary/apod?api_key=l8YJy4uVBHiBDOGzF6f4BuJi65Oe199Ow1cov24N")
    
         .then(response => {
           console.log(response);
           setImage(response.data);
           console.log(image);
         })
     
         .catch(error => {
           console.log(`The error was: ${error}`);
         });
    
        }, []);
}
