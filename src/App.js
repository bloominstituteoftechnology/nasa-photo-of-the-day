import React from "react";
import "./App.css";
import Header from "./Header";
import Center from "./Center";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "./constants";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header data={data} />
      <Center data={data} />
    </div>
  );
}

export default App;
