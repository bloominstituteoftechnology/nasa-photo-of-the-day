import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=Z8352VzdFCxpNjWtJJFFOBkBMLWjggFJ0zOLrXNB')
        .then(response => {
            console.log(response)
        })
  return (
    <div className="App">
      <p>
       
      </p>
    </div>
  );
}

export default App;
