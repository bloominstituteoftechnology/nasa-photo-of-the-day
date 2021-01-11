 import React, {useState} from "react";
 import axios from 'axios';
 import Header from './components/Header.js'
 import Main from './components/Main.js'
import "./App.css";

function App() {
axios.get('https://api.nasa.gov/planetary/apod?api_key=odfiFzCoKkOrwsmXGGjpc6pAiegaEJa5pI1dGAA8')
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log("Houston we have a problem")
})

  return (
    <div className="App">
      <Header />
      <Main />
      
    </div>
  );
}

export default App;
