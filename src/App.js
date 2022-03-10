import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaPic, setNasaPic] = useState("");
  useEffect(() => {
    axios
      .get(
        "`https://api.nasa.gov/planetary/apod?api_key=2IHlxCsWWLtexHqizaiDCbZeuFMy929Fb9XqdxOx&date"
      )
      .then((res) => setNasaPic(res.data.message));
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo of the Day !</h1>
      <img src={nasaPic} alt=" a random pic" />
    </div>
  );
}

export default App;
