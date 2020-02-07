import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";
// import { checkPropTypes } from "prop-types";

export default function PhotoList() {
  const [apod, setApod] = useState()
  
  useEffect(() => {
    axios
  .get('https://api.nasa.gov/planetary/apod?api_key=Ay2TnR1Te1MgqCYbb2tfXYiJL0QmW6JSah3QzpGh')
  .then(res => {
    setApod(res.data);
    console.log(res.data);
  })
  .catch(error => {
    console.log("the data was not returned", error)
  })
  });

  return (
    <div>
     <PhotoCard />
    </div>
  );
}
