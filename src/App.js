import React from "react";
import Display from "./Components/Display";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="nav">
        <img
          src={`https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png`}
          alt="Official NASA Logo"
        />
        {/* <DatePicker /> */}
      </header>
      <Display />
      <footer>
        <span>copyright</span>
      </footer>
    </div>
  );
}

export default App;
