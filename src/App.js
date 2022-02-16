import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";

import Title from "./components/Title";
import NasaImg from "./components/Nasa_img";
import Copyright from "./components/Copyright";
import Explanation from "./components/Explanation";
import NasaVid from "./components/Nasa_vid";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Title title={data.title} date={data.date} />
      <NasaVid photo={data.url} />
      <Copyright copyright={data.copyright} />
      <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;
