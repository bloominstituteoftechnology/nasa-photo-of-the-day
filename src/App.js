import React from "react";
import "./App.css";
import Header from "./Header";
import Center from "./Center";
import { useState, useEffect } from "react";

function App() {
  const [imgSrc, setimgSrc] = useState("");

  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Center imgSrc={imgSrc} />
    </div>
  );
}

export default App;
