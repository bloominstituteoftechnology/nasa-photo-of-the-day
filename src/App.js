import React from "react";
import "./App.css";
import Content from "../src/components/Content";
import Cards from "../src/components/Cards";



function App() {
  
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Cards />
      <Content />
    </div>
  );
}

export default App;
