import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res.data);
        setLightOn(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const [lightOn, setLightOn] = useState();

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
