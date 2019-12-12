import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./NASACard";
// import { tsPropertySignature } from "@babel/types";

export default function NASAContent() {
const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(response => {
      console.log(response.data);
      setPhotos(response.data)
    })
    .catch(error => {
      console.log("the data was not returned", error)
    });
  }, [])
  return (
    <div className="photo">
      < NASACard title={photos.title} imgURL={photos.url} explanation={photos.explanation} date={photos.date}/>
    </div>
    )
}