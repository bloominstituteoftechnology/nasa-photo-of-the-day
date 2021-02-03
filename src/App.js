import React, { useState } from "react";
import Home from './views/HomeView/Home'
import Apod from './views/OthersViews/Apod'
import "./styles/App.css";

function App() {

  //this slice of state will help to mount and unmount components
  const [view, setView] = useState('APOD')

  return (
    <div className="App">
      { view === 'HOME' && <Home /> }
      { view === 'APOD' && <Apod /> }
    </div>
  );
}

export default App;
