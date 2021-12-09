import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "./Constants";
import Image from "./components/Image/Image";
import Explonation from "./components/Explanation/Explanation";
import Copyright from "./components/Copyright/copyright";
import "./App.css";
import Explanation from "./components/Explanation/Explanation";
import CopyRight from "./components/Copyright/copyright";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${API_URL}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res);
          setNasaData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <nav>
        <a
          href="nasa-photo-of-the-day"
          target="_blank"
          rel="noopener noreferrer"
        >
          {nasaData.date}
        </a>
        <a
          href="https://www.calendardate.com/todays.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </nav>
      <div>
        <h1>{nasaData.title}</h1>
      </div>
      <Image nasaURL={nasaData.url} />
      <Explanation imgExplanation={nasaData.explanation} />
      <CopyRight copyRightOfImg={nasaData.copyright} />
    </div>
  );
}

export default App;
