import React from "react";
import "./App.css";
import Apod from "./components/ApodList";
import styled from 'styled-components';

const AppContainer = styled.div
`
  width: 80%;
  margin: 0 auto;
`

function App() {
  return (
    <AppContainer>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Apod />
    </AppContainer>
  );
}

export default App;
