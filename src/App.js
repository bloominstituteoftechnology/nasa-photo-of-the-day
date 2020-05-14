import React from "react";
import "./App.css";
import axios from "axios"

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



axios.get(`https://api.nasa.gov/planetary/apod?api_key=wdgMfHqmpIs81ojLq6QzxTYCV9Zkwto17RgzmCtR`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        debugger
      })

export default App;
