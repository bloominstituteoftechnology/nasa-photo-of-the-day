import React from "react";
import "./App.css";
import NasaPhotos from './components/NasaPhotos';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <nav className="nav-container">
          <button className="buttons" href="https://nasa.gov">Home</button>
        </nav>
        <div className="title">
          <h1>Photo of the Day by NASA</h1>
        </div>
      </div>
      <NasaPhotos />
    </div>
  );
}

export default App;