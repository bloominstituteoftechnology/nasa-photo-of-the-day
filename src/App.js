import React from "react";
import "./App.css";
import NasaPhoto from "./NasaPhoto"
import NavBar from "./NavBar"
import { Button } from './Button'
import theme from "./theme"
import { ThemeProvider } from "styled-components"


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar />
      {/* <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button> */}
      <div>
        <NasaPhoto />
      </div>
    </div>
    </ThemeProvider>
  )
}


export default App;
