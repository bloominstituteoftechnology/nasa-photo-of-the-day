import React from "react";
import "./App.css";
import Header from "./layout/Header";
import NasaData from "./components/NasaData";

import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      
      <NasaData/>
      <Footer/>
    </div>
  );
}

export default App;
