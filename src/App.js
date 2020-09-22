import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./components/card";

function App() {
  const [apod, setApod] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=8pfLcxz7ICT3fKg0p9AzCMSXzMKxMa3uAvxcxGs8&date=${
          startDate.toISOString().split("T")[0]
        }`
      )
      .then((response) => {
        console.log(response);
        setApod(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [startDate]);

  return (
    <div className="App">
      <div>
        <DatePicker selected={startDate} onChange={handleChange} />
      </div>
      <Card props={apod} />
    </div>
  );
}

export default App;
