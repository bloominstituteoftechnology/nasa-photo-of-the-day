import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import Header from "./Header";
import Footer from "./Footer";
import Photo from "./NASApod";

function App() {
  const [nasaData, setNasaData] = useState({});
  console.log(nasaData);
  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(`${BASE_URL}${API_KEY}`)
        .then((res) => {
          // console.log(res.data.date);
          // console.log(fetchPhoto);
          setNasaData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPhoto();
  }, []);

  return (
    <div className="App">
      <Header nasaData={nasaData} />
      <Photo nasaData={nasaData} />
      <Footer />
    </div>
  );
}

export default App;
