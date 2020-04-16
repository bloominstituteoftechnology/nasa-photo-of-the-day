import React from "react";
import "./App.css";
import Content from "../src/components/Content";
import Card from "../src/components/Card";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Card />
      <Content />
    </div>
  );
}

export default App;
