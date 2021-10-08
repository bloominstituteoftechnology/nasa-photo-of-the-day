import React from "react";
import "./App.css";
import APOD from "./components/APOD";


function App() {
  return (
    
    <div className="App">
      <header>
        <img src = "https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt = "nasa logo" />
        <h1>NASA App : Learn React.js While Traveling The Universe</h1>
      </header>
      <div className = "CardSection">
        <div className = "Card">
          <div><APOD /></div>
        </div>
      </div>
      <footer>
        <div>
          <p className = "footerNote">Designed by Bradley Michaels</p>
          <p className = "footerNote">All data provided by NASA</p>
          <p className = "footerNote">All rights reserved by Nasa</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
