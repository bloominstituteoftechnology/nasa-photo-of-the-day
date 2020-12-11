// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";
import Contents from "./Components/Contents.js";
import Img from "./Components/Img.js";
import "./App.css";
import Header from "./Components/Header.js";

function App() {
  const [data, setData] = useState([]);
  // const [error, setError] = useState();
  console.log(data);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-12-08"
      )
      .then((res) => {
        console.log(res.data, "RES.DATA");
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <h1>NASA's Photo of the Day</h1>
      <Img data={data} />
      <Contents data={data} />
    </div>
  );
}

export default App;
