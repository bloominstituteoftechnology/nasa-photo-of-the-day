import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Heading";
import Nav from "./Nav";
import { NasaImages } from "./nasa-api";
// NasaImages()

function App() {

  return (
    <div className="App">
      <div style={{width: "95%", border: "1px solid black", margin: "0 auto"}}>
        <Header />
        <Nav />
      </div>
      <div>
        <NasaImages />
      </div>
    </div>
  );
}

export default App;
