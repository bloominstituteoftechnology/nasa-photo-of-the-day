import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./APOD/Header";
import Card from "./APOD/Card";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=iuZ0MCtSF5sDdt8apQEPwg3AxliAa6jSz22qjzTz"
      )
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Card data={info} />
      <p>
        Made with ❤️ on 🌎
      </p>
    </div>
  );
}

export default App;
