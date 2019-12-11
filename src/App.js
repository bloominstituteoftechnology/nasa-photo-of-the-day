import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import AboveTheFold from "./components/AboveTheFold";

function App() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.dir(response.data);
      setApod(response.data);
    })
    .catch(error => {
      console.dog('Data was not returned', error);
    });
  }, []);

  return (
    <div className="App">
      <AboveTheFold url={apod.url} date={apod.date} title={apod.title} explanation={apod.explanation} />
    </div>
  );
}

export default App;
