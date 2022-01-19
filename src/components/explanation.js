import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled,{ keyframes } from "styled-components";

const kf = keyframes`
0% {
  color: black;
}
50% {
  color: ivory;
}
100% {
  color: black;
}
`

const Paragraph = styled.p`
font-family: "Comic Sans MS";
animation: ${kf} 2.5s infinite;
text-align: center;
max-width: 100%;
margin-right: 20%;
margin-left: 20%;
`

export default function ExplanationSect() {

    const [explanation, setExplanation] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HKUeanWcdsWmMYxY9wIVsADkfGzLf27gDx1af8J9')
      .then(response => {
        setExplanation(response.data.explanation)
      })
      .catch(error => {
          console.error(error);
      })
    })
  
    return (
      <div className="ExplanationContainer">
        <Paragraph>
        <p>{explanation}</p>
        </Paragraph>
      </div>
    );
}