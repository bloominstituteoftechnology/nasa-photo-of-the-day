import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
        return photo
      })
      .catch((err) => {
        console.error(err);
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
        !
      </p>
      <img src={`{photo.url}`} />
    </div>
  );
}

export default App;
