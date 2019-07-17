import React from "react";
// import axios from "axios";
import ImageGrid from "./components/ImageGrid"
import Header from "./components/Header"
import Footer from "./components/Footer"


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
