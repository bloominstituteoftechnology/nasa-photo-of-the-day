import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Card from "./components/card";

function App() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=8pfLcxz7ICT3fKg0p9AzCMSXzMKxMa3uAvxcxGs8"
      )
      .then((response) => {
        console.log(response);
        setApod(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Card props={apod} />
    </div>
  );
}

export default App;
