import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header';
import Title from './Title';
import Photo from './Photo';
import Copyright from './Copyright';
import Description from './Description';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Photo />
      <Copyright />
      <Description />
    </div>
  );
}

export default App;
