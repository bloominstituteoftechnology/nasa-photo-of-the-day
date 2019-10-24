import React from "react";
import "./App.css";
import Logo from "./components/Header/Logo";
import Title from "./components/Header/Title";
import CardList from "./components/Body/CardList";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <Title />
      </div>
    <CardList />
    </div>
  );
}
export default App;