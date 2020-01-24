import React, { useState, useEffect } from "react";
import ImageContainer from "./components/ImageContainer";
import styled from "styled-components";
import axios from "axios";
import "./App.css";


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 3em;
  background-image: url("https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg");
  background-color: black;
  background-size: 100% 100%;
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
