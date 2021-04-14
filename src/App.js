import React, { useState, useEffect } from "react";
import "./App.css";

import Axios from 'axios';

import { API_KEY } from './Configuration/Key.json';

import Image from './Components/Image';

function App() {

  const [data, setData] = useState([]);

  const APOD = new URL('/planetary/apod', 'https://api.nasa.gov');

  APOD.search = new URLSearchParams({ api_key: API_KEY  });

  useEffect(() => {
    Axios.get(encodeURI(APOD.href)).then((Res) => {
      setData(Res.data);
    }).catch((Err) => {
      console.log(Err);
    });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {Image(data)}
    </div>
  );
}

export default App;
