import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./NASACard";

export default function NASAContent() {
const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios.get(`https://ghibliapi.herokuapp.com/films/`)
    .then(response => {
      console.log(response.data);
      setFilms(response.data)
    })
    .catch(error => {
      console.log("the data was not returned", error)
    });
  }, [])
  return (
    <div className="photo">
      {photos.map(photo => {
        return (
          <NASACard key={film.id} 
          title={photo.title}  />
        )
      })}
    </div>
    )
}
