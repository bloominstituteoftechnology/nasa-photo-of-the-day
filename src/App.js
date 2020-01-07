import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import PhotoData from './Components/PhotoCard/PhotoData'

function App() {
  return (
    <div className="App">
      <Nav />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
      <PhotoData />
    </div>
  );
}

export default App;
