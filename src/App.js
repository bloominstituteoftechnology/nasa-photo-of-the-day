import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(success => console.log('successful',success))
.catch(fail => console.log('get fail', fail))

//nasa axios request:
//https://api.nasa.gov/planetary/apod





function App() {
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
