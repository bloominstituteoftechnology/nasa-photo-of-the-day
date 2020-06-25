import React from "react";
import NasaCardContainer from './DOM-I/NasaCardContainer';
import "./App.css";
import NasaData from "./DOM-I/nasaCardInfo";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun, yay <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      
      <NasaData/>
      <NasaCardContainer/>
    </div>
    

  );
}

export default App;
