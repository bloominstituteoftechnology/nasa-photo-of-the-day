import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data";
import PreloadScreen from "./components/PreloadScreen";

function App() {
  return (
    <div className="App">
      <PreloadScreen />
      <Data />
    </div>
  );
}

export default App;
