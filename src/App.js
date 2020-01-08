import React from "react";
import Header from "./components/html_components/Header";
import PictureList from "./components/picture_components/PictureList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src=""></img>
        </div>
        <div className="App Title">
        <p>Photo of the Day from NASA</p>
        </div>
      </header>

      <PictureList />

    </div>
  );
}

export default App;
