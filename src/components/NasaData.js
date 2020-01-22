import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaImagecard from "./NasaImagecard";

export default function NasaData() {
  const [nasaDataArray, setNasaDataArray] = useState([]);
  const [nasaData, setNasaData] = useState({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "image",
    service_version: "",
    title: "",
    url: ""
  });
  useEffect(() => {
    console.log("nasa component mounted");
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=OzNA7KGSQNWftbQgC4w9TH8ZmGkFCBO1tqhVLJAY"
      )
      .then(response => {
        console.log(response);
        console.log(response.data);
        return setNasaData(response.data);
        })
      .catch(error => {
        console.log("error: ", error);
      }, []);
  }, []);
  return (
  
  <div>
<NasaImagecard nasaData={nasaData}/>;
  </div>)
}
