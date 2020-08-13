import React, { useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [photo, setPhoto] = useState(null)


  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
