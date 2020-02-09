import React, { useState, useEffect } from "react";
import NasaCard from "../components/NasaCard";
import axios from "axios";

export default function NasaPhoto() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=SzAoKCd6rTFUztmoHWqnZUdIiXm8aAeKe7ViyXAf"
      )
      .then(res => {
        console.log(res);
        setInfo(res.data);
      })
      .catch(error => {
        console.log("Data is lost in a black hole!", error);
      });
  }, []);

  return (
    <div className="info">
      <NasaCard
        title={info.title}
        date={info.date}
        explanation={info.explanation}
        photo={info.url}
      />
    </div>
  );
}
