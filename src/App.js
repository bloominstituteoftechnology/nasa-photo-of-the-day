import React, { useState } from "react";
import "./App.css";

function App() {
  // fetch will go here
  const [data, setData] = useState(fetch('https://api.nasa.gov/planetary/apod?api_key=hbQeB0ODFwlwO5hu3xLYgmNfwQicougVUBPwVIdx')
    .then(response => response.json())
    .then(data => console.log(data))
  )
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
