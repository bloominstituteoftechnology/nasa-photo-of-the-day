import React, {useState, useEffect} from "react";
import "./App.css";
import Apod from "./components/ApodDisplay";

function App() {
  return (
    <div className="App">
      <Apod imgUrl={"Nope"} description={"Boring.. no idea what we need here."}/>
    </div>
  );
}

export default App;
