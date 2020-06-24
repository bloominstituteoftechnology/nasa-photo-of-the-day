import React from "react";
import "./App.css";
import NasaList from "./components/NasaList";
import nasa from "./nasa.png";

function App() {
  return (
    <div className="App">
      <img className="nasa" src={nasa} alt="NASA Logo" />
      <h1>NASA Project</h1>
      <h3>Photo of the Day</h3>
      <nav className="nav">
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          Home
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          Missions
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          Photo of the Day
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          NASA TV
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          About
        </a>
      </nav>
      <NasaList />
    </div>
  );
}

export default App;
