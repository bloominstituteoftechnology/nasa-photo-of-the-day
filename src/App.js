import React from "react";
import "./App.css";
import InfoContainer from './components/info_container.js';
import NASAimage from './components/image.js'
import Header from './components/header.js'

function App() {

  return (
    <div className="App">
    <Header />
    <NASAimage />
    <InfoContainer />

    </div>
  );
}

export default App;
