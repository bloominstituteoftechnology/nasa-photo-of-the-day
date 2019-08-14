import React from "react";
import axios from "axios";
import "./App.css";
import CreateMain from "./components/CreateMain";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <CreateMain />
    </div>
  );
}

export default App;
