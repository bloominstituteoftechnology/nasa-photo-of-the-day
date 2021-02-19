import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Title from "./Title";
import Explanation from "./Explanation";
import Image from "./Image";
import Date from "./Date";
import Copyright from "./Copyright";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const StyledApp = styled.div`
  box-sizing: border-box;
  background-color: #ffe6e6;
  opacity: 0%;
  color: black;
  font-weight: ${(props) => (props.bold ? "bold" : "initial")};
  width: 100%;
  justify-content: space-between;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  animation: ${kf} 1s ease-in-out forwards;
`;

function App() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=XY0cGzmindfZ6yFibQC0WqWw3amXtKf0FvbRKqL9"
      )
      .then((res) => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!nasaData) return <h3>Loading...</h3>;

  return (
    <StyledApp className="App">
      <Title title={nasaData.title} />
      <Image url={nasaData.hdurl} />
      <Explanation explanation={nasaData.explanation} />
      <Date date={nasaData.date} />
      {nasaData.copyright && <Copyright copyright={nasaData.copyright} />}
    </StyledApp>
  );
}

export default App;
