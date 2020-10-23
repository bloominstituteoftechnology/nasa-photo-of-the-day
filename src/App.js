import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/container/Container";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Container /> 
      <Footer />
    </div>
  );
}

export default App;
