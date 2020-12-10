import React, { useEffect, useState } from "react";
import axios from "axios";
import Contents from "./Components/Contents.js";
import Img from "./Components/Img.js";
import "./App.css";

function App() {
  const [data, setData] = useState();
  // const [error, setError] = useState();
  console.log(data);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=yPU7r41IChRWpyYKhpGzZNsIKxTmIZoAf0alYBgE"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Contents />
      <Img data={data} />
      <h1>NASA's Photo of the Day</h1>
    </div>
  );
}

export default App;
