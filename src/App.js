import React from "react";
import "./App.css";
import Photo from "./Photo";
import Header from "./Header";
import About from "./About";
import PhotoInfo from "./PhotoInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Photo />
      <PhotoInfo />
      <About />
    </div>
  );
}

export default App;
