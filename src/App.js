import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Title from "./Title";
import Explanation from "./Explanation";
import Image from "./Image";
import Date from "./Date";
import Copyright from "./Copyright";

function App() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!nasaData) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <Title title={nasaData.title} />
      <Explanation explanation={nasaData.explanation} />
      <Image url={nasaData.hdurl} />
      <Date date={nasaData.date} />
      {nasaData.copyright && <Copyright copyright={nasaData.copyright} />}
    </div>
  );
}

export default App;
