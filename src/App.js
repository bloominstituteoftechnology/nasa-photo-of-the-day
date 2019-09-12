import React from "react";
import "./App.css";
import ComponentOne from "./Components/Component1"
import ComponentTwo from "./Components/Component2";
// import ComponentThree from "./Components/Component3";


function App() {
  return (
    <div className="App">
      <ComponentOne/>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      <ComponentTwo/>
      <p></p>
    </div>
    
  );
}

export default App;
