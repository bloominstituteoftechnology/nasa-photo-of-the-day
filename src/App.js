import React, { useState, useEffect } from "react";
import ImageContainer from "./components/ImageContainer";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import "./App.css";

const spin = keyframes`
0% {
  -webkit-transform: translate(0,0%) ;
}

50% {
  -webkit-transform: translate(0,5%)
}

100% {
  -webkit-transform: translate(0,0%)
}
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 3em;
  background-image: url("https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg");
  background-size: 150% 120%;
  animation: ${spin} 15s ease-in-out;
  animation-iteration-count: infinite;
  background-color: black;
`;

function App() {
  const [nasa, setNasa] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setNasa(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      <ImageContainer data={nasa} />
    </Wrapper>
  );
}

export default App;
