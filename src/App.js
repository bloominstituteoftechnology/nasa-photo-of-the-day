import React from "react";
import "./App.css";
import CardContent from "./components/Img.js";
import styled from 'styled-components';
function App() {
  const Background = styled.div`
  background-color:lightgray;
  `
  return (
    <Background className="App">
      <CardContent/>
    </Background>
  );
}



export default App;
