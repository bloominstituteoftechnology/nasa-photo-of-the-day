import React, {useState, useEffect} from "react";
import "./App.css";
import NasaPicList from "./NasaPicList";

function App() {
  return (
    <div className="App">
      <NasaPicList
      />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;