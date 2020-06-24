import React from "react";
import NasaCardContainer from './DOM-I/Nasa-Card';
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun, yay <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaCardContainer/>
    </div>
    

  );
}

export default App;
