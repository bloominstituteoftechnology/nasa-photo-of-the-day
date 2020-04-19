import React from "react";
import PicGrid from "./PicGrid"
import "./App.css";
import styled from 'styled-components'

const Wrapper = styled.body`
    background: papayawhip;
    height: 100%;
    

`;

function App() {
  return (
    <div className="App">
      <Wrapper>
      <PicGrid />
      </Wrapper>
    </div>
  );
}

export default App;
