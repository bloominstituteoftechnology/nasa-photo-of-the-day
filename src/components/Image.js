import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/index";

export default function Image(props) {
    const { camera, close } = props
    const [imageData, setImageData] = useState('')

    function randomImage(data) {
        return data[Math.floor(Math.random() * (data.length + 1))]
    }


  useEffect(() => {
    axios.get(`${BASE_URL}${camera}/photos?earth_date=2015-10-6&api_key=${API_KEY}`)
    .then(res => {
         setImageData(randomImage(res.data.photos))
        // console.log(res.data.photos[1].img_src)
    })
    .catch(err => {
        debugger
    })
    console.log(imageData)
  }, []);
  console.log(imageData)

return (
    <div className="image">
       <img src={imageData.img_src} alt="NASA_image"></img>
  
    </div>
)
}
