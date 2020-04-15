import React from "react";
import "./App.css";
import Header from './Components/Header/Header';
import CardList from './Components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <h1>Our Planets</h1>
        <CardList />
      </div>
    </div>
  );
}

export default App;
