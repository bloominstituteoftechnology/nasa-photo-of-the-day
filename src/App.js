import React from "react";
import "./App.css";
import Api from "./Components/Api";
import styled from "styled-components";

const BodyBackground = styled.div`
  background-color: #100f35;
  padding-bottom: 2px;
  padding-top: 4px;
`;

function App() {
  return (
    <BodyBackground className="App">
      <Api />
    </BodyBackground>
  );
}

export default App;
