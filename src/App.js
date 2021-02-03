import React, { useState } from "react";
import Home from './views/HomeView/Home'
import Apod from './views/OthersViews/Apod'
import "./styles/App.css";

function App() {

  //this slice of state will help to mount and unmount components
  const [view, setView] = useState('HOME')

  return (
    <div className="App">
      { view === 'HOME' && <Home view={view} setView={setView} /> }
      { view === 'APOD' && <Apod setView={setView} /> }
    </div>
  );
}

export default App;
