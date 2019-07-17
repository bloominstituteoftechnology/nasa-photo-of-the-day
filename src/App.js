import React, { useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import ImageCard from "./components/ImageCard"
import ImageGrid from "./components/ImageGrid"

function App() {
  return (
    <div className="App">
      <ImageGrid />
    </div>
  );
}

export default App;
