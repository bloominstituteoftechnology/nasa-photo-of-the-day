import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/index";

export default function Image(props) {
    const { camera, close } = props
    const [imageData, setImageData] = useState(null)

    function randomImage(data) {
        return null;
    }


  useEffect(() => {
    axios.get(`${BASE_URL}${camera}/photos?earth_date=2015-10-6&api_key=${API_KEY}`)
    .then(res => {
         setImageData(randomImage(res.photos))
        console.log(res.data.photos[1].img_src)
    })
    .catch(err => {
        debugger
    })
  });

return (
    <div>test</div>
)
}
