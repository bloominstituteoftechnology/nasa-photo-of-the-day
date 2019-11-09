import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

export default function ImageList(){
  const [image, setImage] = useState([]);


  useEffect (() => {
    axios
      .get (`https://ghibliapi.herokuapp.com/films/`)
      .then(res => {
        console.log(res);
        setImage(res.data);
      })
      .catch(err => {
        console.log(`The error was: ${err}`);
      });
  }, []);

return (

      {image.map((item, index) => {
          return <ImageCard key={index} item={item} />;
        })}
  );}
