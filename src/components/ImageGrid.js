import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";


export default function ImageGrid () {

  const [photo, setPhoto] = useState([]);
  const [photoTitle, setPhotoTitle] = useState([]);
  const axios = require('axios')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=y70elfOEXh8fUbXeFjtv1y9IxvULbcHTiMblO6km&date=2012-03-14')
      .then(response => {
        const imgURL = response.data.hdurl;
        console.log(imgURL);
        setPhoto(imgURL);
        const imgTitle = response.data.title;
        console.log(imgTitle);
        setPhotoTitle(imgTitle);
      });
  }, []);


  return (
    <div className = "imageGrid">
     <ImageCard key={photo} imgURL={photo} imgTitle={photoTitle} />
    </div>
  )
}
