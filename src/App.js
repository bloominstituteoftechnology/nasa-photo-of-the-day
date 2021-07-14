import React, {useState} from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants/index';

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
