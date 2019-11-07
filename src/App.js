import React from "react";
import ApodDisplay from "./components/ApodDisplay";
import "./App.css";
import styled from "styled-components";

const ApodTitle = styled.h1`
  font-size: 70px;
  text-align: center;
  margin: 2% 0 3% 0;
`;
function App() {
  return (
    <div className="App">
      <ApodTitle>Nasa Astronomy Picture of the Day</ApodTitle>
      <hr></hr>
      <ApodDisplay />
    </div>
  );
}

export default App;
