import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled, { keyframes } from "styled-components";

const kf = keyframes`
100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
    color: blue;
}
`
const Title = styled.h1`
opacity: 0%;
transform: scale(4) rotateZ(2000deg);
animation: ${kf} infinite ease-in-out forwards;
color: yellow;
`

export default function TitleSect() {

    const [title, setTitle] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HKUeanWcdsWmMYxY9wIVsADkfGzLf27gDx1af8J9')
      .then(response => {
        setTitle(response.data.title)
      })
      .catch(error => {
          console.error(error);
      })
    })
  
    return (
      <div className="TitleContainer">
        <Title>
        <h1>{title}</h1>
        </Title>
      </div>
    );
}