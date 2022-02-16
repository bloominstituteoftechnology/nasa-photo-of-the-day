import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        {/* This does NOT need a componet as it will not change */}
        {/* this is where the entire page title will go */}
      </header>
      <h1>
        {/* this needs a componet */}
        {/* this is where todays photo name will go */}
      </h1>
      <p>
        {/* this needs a componet */}
        {/* this is where the date will go */}
      </p>
      <img>
      {/* this needs a componet */}
      {/* this is where todays photo will go */}
      </img>
      <p>
        {/* this needs a componet */}
        {/* this is where todays photos copyright will go */}
        </p>
      <p>
        {/* this needs a componet */}
        {/* this is where todays photo explanation will go */}
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
      </p>
    </div>
  );
}

export default App;
