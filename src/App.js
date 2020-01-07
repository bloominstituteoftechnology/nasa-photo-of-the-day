import React from "react";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import PhotoData from './Components/PhotoCard/PhotoData'
import Logo from './assets/Logo.png';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="rightWrapper">

        <div className="logoContainer"><img className="logo"src={Logo} /><h1>Photo of the Day</h1></div>

      <PhotoData />
      </div>
    </div>
  );
}

export default App;
