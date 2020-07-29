import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PhotoInfo from "./PhotoInfo";
import Footer from "./Footer";
import axios from "axios";

const NasaPhoto = () => {
  const [apod, setApod] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        // "https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=vlPg1efoBqyPSujeb1VCyEhppMl25fWl5tovOCUo"
        //use the above link if NASA's time travel experiment fails again!
        "https://api.nasa.gov/planetary/apod?api_key=vlPg1efoBqyPSujeb1VCyEhppMl25fWl5tovOCUo"
      )
      .then((nasaData) => {
        setApod(nasaData.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log("Success!", apod);
  return (
    <>
      <Header />
      <div className="photo">
        <img
          className="dailyPhoto"
          src={apod.url}
          alt="NASA APOD"
        />
        <PhotoInfo key={apod.url} owner={apod.copyright} date ={apod.date} title = {apod.title}/>
        <div>
          <Sidebar explanation ={apod.explanation}/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NasaPhoto;
