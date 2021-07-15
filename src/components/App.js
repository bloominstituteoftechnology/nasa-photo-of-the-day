import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import Title from "./Title";
import Video from "./Video";
import Explanation from "./Explanation";
import Date from "./Date";

function App() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}`)
      .then((res) => {
        console.log(res);
        setApod(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Title title={apod.title} />
      <Date date={apod.date} />

      <Video url={apod.url} />

      <Explanation explanation={apod.explanation} />
    </div>
  );
}
export default App;
