import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "ImageCard";

export default function ImageList(){
  const [image, setImage] = useState([]);


  useEffect (() => {
    axios
      .get ('https://api.nasa.gov/planetary/apod?api_key=aCoNh4Iufc6lpyCBZXknxcsi5ENPZOFNeHbuiped')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(`The error was: ${err}`);
      });
  }, []);
return (
  <div className="imagescss">
  </div>
);}
