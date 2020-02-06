import React from "react";
import "./App.css";
import CardDisplay from "./Components/CardDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "reactstrap";

function App() {

  return (
    <div className="App">
      <Jumbotron>
      <h1>Welcome to the <span>NASA</span>🚀 Photo of the Day!</h1>
      </Jumbotron>
      <CardDisplay />
    </div>
  );
}

export default App;
