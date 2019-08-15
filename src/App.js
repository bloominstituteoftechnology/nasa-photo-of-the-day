import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./components/NasaCard";
import DatePickerComp from "./components/DatePicker";
import styled from "styled-components";
import "./scss/App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date("2019/01/17").toISOString().split("T")[0]
  );

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=6VFteJXqOzwuqeItB8JzRG1IJK6KWCjuew4iH6nr&date=${selectedDate}`
      )
      .then(res => {
        setNasaData(res.data);
        console.log("RESPONSE:", res.data);
      })
      .catch(err => console.log("YOU MESSED UP SOMETHING:", err));
  }, [selectedDate]);

  return (
    <div className="App">
      <div className="leftCol">
        <h1>Nasa Photo of the Day</h1>
        <div className="calendar">
          <DatePickerComp
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
      <NasaCard
        title={nasaData.title}
        media_type={nasaData.media_type}
        date={nasaData.date}
        url={nasaData.url}
        explanation={nasaData.explanation}
      />
    </div>
  );
}

export default App;
