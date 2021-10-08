import React from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './components/constants/constantsIndex';
import MainContent from "./components/main-content";
// import Nav from './components/nav'

console.log(`${BASE_URL}?api_key=${API_KEY}`)
function App() {
  return (
    <div className="App">
      <MainContent />
    </div>
    
  );
}

export default App;
