import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import Title from "./Title";
import Video from "./Video";

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
      </p>
      <Title title={apod.title} />

      <Video url={apod.url} />

      <p>{apod.explanation}</p>
    </div>
  );
}
//<ReactPlayer url='apod.url' />
export default App;
