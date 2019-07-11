import React from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Today from "./components/Today";
import YourChoice from "./components/YourChoice";

const BodyContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
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
