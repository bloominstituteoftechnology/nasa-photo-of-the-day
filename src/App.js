import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import Photo from "./components/Photo";
import "./App.css";

export default function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}&date=2012-03-14`)
      .then((res) => {
        setPhotoOfTheDay(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <Photo image={photoOfTheDay} />
    </div>
  );
}
