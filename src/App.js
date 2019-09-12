import React from "react";
import "./App.css";
import NasaData from './components/NasaData';
import styled from "styled-components";

const WelcomeHeader = styled.h1`
  background: #474d58;
  width: 100vw;
  padding: 40px;
  color: white;
  margin-top: 0;
`;

function App() {
  return (
    <div className="App">
      <WelcomeHeader>Welcome Space Nerds</WelcomeHeader>
      <NasaData/>
    </div>
  );
}

export default App;
