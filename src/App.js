import React from "react";
import "./App.css";
import NasaData from "./components/NasaData";

function App() {

  return (
    <div className="App">
      <p>
        Nasa APOD app!<span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div className="Card">
      <NasaData />
      </div>
    </div>
  );
}

export default App;
