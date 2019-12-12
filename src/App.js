import React from "react";
import "./App.css";
import ImageList from "./ImagesList"
import ImageCard from "./ImageCard"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <ImageList/>
    </div>
  );
}

export default App;
