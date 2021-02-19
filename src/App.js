import React from "react";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <p>
    {props.details} <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
