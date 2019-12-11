import React, { useState, useEffect } from "react";
import axios from "axios";
// import NASACard from "./NASACard";

export default function NASAContent() {
const [photos, setPhotos] = useState()

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=vfrnFWvpKczWYpphewMCOu4Cs2ofS4Ulfok6Z8kA`)
    .then(response => {
      console.log(response);
    //   setFilms(response.data)
    })
    .catch(error => {
      console.log("the data was not returned", error)
    });
  }, [])
  return (
    <div className="photo">
      {/* {photos.map(photo => {
        return (
          <NASACard key={film.id} 
          title={photo.title}  />
        )
      })} */}
    </div>
    )
}
