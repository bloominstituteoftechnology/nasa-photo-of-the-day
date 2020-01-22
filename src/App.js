import React, { useState, useEffect } from "react";
import ImageContainer from "./components/ImageContainer";
import styled from "styled-components";
import axios from "axios";
import "./App.css";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  border-radius: 8px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.3);
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
