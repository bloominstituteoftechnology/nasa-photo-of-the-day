import React from "react";
import "./App.css";
import Apod from "./Apod";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Apod />
      <Button color="danger">Danger!</Button>
    </div>
  );
}

export default App;
