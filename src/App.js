import React from 'react';
import './App.css';
import styled from 'styled-components';
import Page from './Nova pasta/Page';

//styled components
const Background = styled.html`
  background-color: black;
`;

function App() {
  //use state

  //use effect

  return (
    <Background>
      <div className="App">
        <Page />
      </div>
    </Background>
  );
}

export default App;
