import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background: navy;
  color: #fff;
  border: 0;
  margin: 5px;
  transition: 0.2s ease-in;
  brder-radius: 5px;
  &:hover{
    background: #fff;
    border: 2px solid navy;
    color: navy;
  }
`;

export default function ImageList(){
  const [image, setImage] = useState([]);

// https://api.nasa.gov/planetary/apod?api_key=erwHfl0agnFxl25hjboNWeCwRbPbUzlDTQOufnXA

  useEffect (() => {
    axios
      .get (`https://api.nasa.gov/planetary/apod?api_key=erwHfl0agnFxl25hjboNWeCwRbPbUzlDTQOufnXA`)
      .then(res => {
        setImage(res.data);
      })
      .catch(err => {
        console.log(`The error was: ${err}`);
      });
  }, []);

return (
    <div>
     <ImageCard item={image} alt={"Nasa Image of thr Day"} />
     <Button> Go to Nasa website </Button>
      </div>
  );}
