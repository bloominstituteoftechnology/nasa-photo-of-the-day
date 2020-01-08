import React from "react";
import PictureList from "./components/picture_components/PictureList";
import "./images/astronaut.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src="./images/astronaut.png" alt="astronaut" />
        <div className="App Title">
        <p>Photo of the Day from NASA</p>
        </div>
      </header>

      <PictureList />

    </div>
  );
}

export default App;
