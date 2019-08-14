import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import DatePicker from "./components/DatePicker";
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
      });
  }, [selectedDate]);

  return (
    <div className="App">
      <DatePicker />
    </div>
  );
}

export default App;
