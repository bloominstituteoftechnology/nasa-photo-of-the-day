import React from "react";
import Pic from './components/pic';
import theme from './theme';
import './App.css';
import { ThemeProvider } from "styled-components";

function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
      <Pic />
      </ThemeProvider>
    </div>

  );
}

export default App;
