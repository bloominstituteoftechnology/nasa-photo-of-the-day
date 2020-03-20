import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList"
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


function App() {
  return (
    <div className="App">
      <div className="header_container">
        <h1>Nasa Photo of the Day</h1>
        <PhotoList/>
        <Button>This Button Does Nothing and Is Purely For the MVP</Button>
      </div>
    </div>
  );
}

export default App;
