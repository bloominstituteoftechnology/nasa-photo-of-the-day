import React from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './components/constants/constantsIndex';
import MainContent from "./components/main-content";
// import Nav from './components/nav'

console.log(`${BASE_URL}?api_key=${API_KEY}`)
function App() {
  return (
    <div className="App">
      <p>
        
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <MainContent />
    </div>
    
  );
}

export default App;
