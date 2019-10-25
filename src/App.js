import React from "react";
import "./App.css";
import Logo from "./components/Header/Logo";
import Title from "./components/Header/Title";
import SpaceCard from "./components/Body/Card";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <Title />
      </div>
    <SpaceCard />
    </div>
  );
}
export default App;