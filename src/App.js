import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";



function App() {


  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=5jhP0qzjW14HtkX9vqAyeTOSCIaKpXToTMfmA9eJ&date=2017-07-12")
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
