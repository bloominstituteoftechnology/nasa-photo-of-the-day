import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import AboveTheFold from "./components/AboveTheFold";

function App() {
  // * * * * * TODAY'S DATE IN YYYY-MM-DD FORMAT
  const today = new Date();
  const todayDateFormatted = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const [apod, setApod] = useState({});
  const [date, setDate] = useState(todayDateFormatted);

  const changeDate = (event, hello) => {
    event.preventDefault();
    setDate(hello);
  }

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=wJIOkWHVxfRrEKLdY8IAw29SgQy94LgEpCcdB9st&date=' + date)
    .then(response => {
      // console.dir(response.data);
      setApod(response.data);
    })
    .catch(error => {
      console.log('Data was not returned', error);
    });
  }, [date]);

  return (
    <div className="App">
      <AboveTheFold url={apod.url} date={apod.date} title={apod.title} explanation={apod.explanation} changeDate={changeDate}/>
    </div>
  );
}

export default App;
