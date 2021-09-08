import React from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from '../src/constants/index';
import Header from "./components/Header";
import Picture from "./components/Picture";

function App() {
  return (
    <div className="App">
      <Header />
      <Picture />
    </div>
  );
}

export default App;
