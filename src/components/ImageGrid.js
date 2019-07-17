import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";


export default function ImageGrid () {

  const [spacePhoto, setSpacePhoto] = useState([]);
  const axios = require('axios')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-07-12')
      .then(response => {
        console.log(response.data.hdurl);
        const photoURL = response.data.hdurl;
        console.log(photoURL);
      });
  }, [])

  return (
    <div>
      <ImageCard />
    </div>
  )
}
