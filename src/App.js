import React, { useState} from "react";


import Apod from './components/apod';
import Asteroids from './components/asteroids';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Button } from 'reactstrap';

function App() {
  const [ app, setApp ] = useState("asteroids")

  const switchApp = () => {
    const appType = app === "asteroids" ? "apod" : "asteroids"
    console.log(appType)
    setApp(appType)
  }
  
  return (
    <div className="App">
      <h1>{app}</h1>
      {
        app === "apod" ? <Apod /> : <Asteroids />
      }
      <Button className="app-button" color="primary" size="lg" onClick={() => switchApp()}>Switch App</Button>
    </div>
  );
}

export default App;
