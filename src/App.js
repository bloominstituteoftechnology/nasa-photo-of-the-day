import React from "react";
import "./App.css";
import Image from "./components/Photo";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Image />
      <Info />
    </div>
  );
}

export default App;
