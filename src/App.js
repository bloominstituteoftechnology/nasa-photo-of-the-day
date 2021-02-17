import React, {useState} from "react";
import "./App.css";
import axios from 'axios'
import APODData from './dummy-data/dummy'

const API_KEY = `S4BSTHbyAzZp4XrreYaSUMkFEq1O7jPL0efEZT4B`;

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
