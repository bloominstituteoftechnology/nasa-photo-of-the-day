import React from "react";
import "./App.css";

import { useState, useEffect } from 'react';

import axios from 'axios';

import header from '../components/header.js';
import photo from '../components/photo.js';
import caption from '../components/caption';




function App() {

  const [photo, changePhoto] = useState([]);
  const [caption, changeCaption] = useState('');


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
