import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src = "https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />
        <h1>NASA App : Learn React.js While Traveling The Universe</h1>
      </header>
      <div class = "CardSection">
        <div class = "Card">
          <p>
            Read through the instructions in the README.md file to build your NASA
            app! Have fun <span role="img" aria-label='go!'>🚀</span>!
          </p>
          <p>MAIN CARD SECTION TO ADD NASA DATA</p>
        </div>
      </div>
      <footer>
        <div>
          <p class = "footerNote">Designed by Bradley Michaels</p>
          <p class = "footerNote">All data provided by NASA</p>
          <p class = "footerNote">All rights reserved by Nasa</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
