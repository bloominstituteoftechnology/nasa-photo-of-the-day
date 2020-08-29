import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"


function PhotoList(){
  const [photo,setPhoto]= useState([])
  useEffect(()=>{
  axios
  .get(
      "https://api.nasa.gov/planetary/apod?api_key=Ba7YRupoHytlDnPKT1SkgKOeoACy14aPx0Ks2iCs&date=2020-04-25"
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
  


