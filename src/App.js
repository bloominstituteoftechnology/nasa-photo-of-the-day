import React from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Today from "./components/Today";
import YourChoice from "./components/YourChoice";

const BodyContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer>
        <Intro />
        <Today />
        <YourChoice />
      </BodyContainer>
    </div>
  );
}

export default App;
