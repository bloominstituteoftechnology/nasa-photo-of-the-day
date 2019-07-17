import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from './Components/Grid'

function App() {
  return (
    <div className="App">
      <Grid />
      <div className='container'>
        {/* <div className='header'>
          <h1>Holding </h1>
        </div>
        <div className='title'>
        <h1>Title</h1>
        </div>
        <div className='content'>
          <p>content</p>
        </div> */}
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
        </p>
      </div>
    </div>
  );
}

export default App;
