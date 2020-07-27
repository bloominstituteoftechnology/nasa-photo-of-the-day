import React from "react";
import "./App.css";
import NasaStuff from "./NasaStuff";
// nasa api https://api.nasa.gov/planetary/apod
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <nasaStuff />
      </p>
    </div>
  );
}

export default App;
