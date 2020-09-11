import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"


function PhotoList(){
  const [photo,setPhoto]= useState([])
  useEffect(()=>{
  axios
  .get(
      "https://api.nasa.gov/planetary/apod?api_key=EBEVlMGWo2GZ9ETWpZ8DSUis5q58eAsE7XivPRRU"
  ).then(response=>{
      console.log(response)
      setPhoto(response.data)
  })

  },[])

      return (
          <div>
 <PhotoCard data ={photo}/>
          </div>
      )

  }
  export default PhotoList;