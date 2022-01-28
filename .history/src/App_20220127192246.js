import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";


const kf = keyframes`
    50% {
    transform: scale(0.8);
    }
    100% {
    opacity: 1;
    transform: scale(1);
}
`
const StyledApp = styled.div`
    opacity: 0;
    transform: scale(2);
    animation: ${kf} 1s ease-in-out forwards;

    width: 100%;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    flex-flow : column;
`

const StyledAppFooter = styled.div`
    padding: 25px;
`
function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=iuZ0MCtSF5sDdt8apQEPwg3AxliAa6jSz22qjzTz"
      )
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledApp>
      <Header />
      <Card data={info} />
      <StyledAppFooter>
      <p>
        Made with ❤️ on 🌎
      </p>
      </StyledAppFooter>
      
    </StyledApp>
  );
}

export default App;
