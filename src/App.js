import React from "react";
import "./App.css";
import AstroApi from "./components/AstroApi";
// import AstroCard from "./components/AstroCard";
import styled from "styled-components";

const Heading = styled.h1`
  color: white;
  background: black;
  font-size: 70px;
`;

function App() {
  return (
    <div className="App">
      <Heading>NASA ROCKS</Heading>
      <AstroApi />
    </div>
  );
}

export default App;
