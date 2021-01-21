import React from "react";
import ImageDisplay from './components/ImageDisplay'
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <p>
        <span role="img" aria-label='go!'>🚀🚀🚀🚀🚀🚀🚀</span>
      </p>
      <ImageDisplay />
    </div>
  );
}

export default App;
