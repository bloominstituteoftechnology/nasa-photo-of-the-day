import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { NASA_URL } from "../src/index";
import Card from "./components/Card";

function App() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    
    const fetchData = () => {
    axios
      .get(NASA_URL)
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => {
        return err;
      });
    }

    fetchData()

  }, []);

  return (
    <div className="App">
      <Card nasaData={nasaData} />
    </div>
  );
}

export default App;
