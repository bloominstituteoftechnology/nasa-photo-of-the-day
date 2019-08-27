import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./components/Didsplay/Display";
import "./App.css";

function App() {
  const [data, setDate] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setDate(res.data);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Display imgSrc={data.url}  title={data.title} description={data.explanation}/>
    </div>
  );
}

export default App;
