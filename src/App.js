import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";
import "./App.css";
import axios from "axios";

function App() {

  useEffect (() => {
    axios
      .get (https://api.nasa.gov/planetary/apod?api_key=SzAoKCd6rTFUztmoHWqnZUdIiXm8aAeKe7ViyXAf
  }
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* <Button color="danger">Danger!</Button> */}
    </div>
  );
}

export default App;
