import React, {useState,useEffect} from "react";
import "./App.css";
import NasaImage from "./components/NasaImage";



function App() {

  return (
    <div className="App">
      <NasaImage></NasaImage>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
