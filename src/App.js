import React from "react";
import "./App.css";
import Pic from "./nasaPic";
import Title from "./nasaHeader";
import Copy from "./nasaFooter";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Title />
      <Pic />
      <Copy />
    </div>
  );
}

export default App;
