import React,{useState, useEffect} from "react";
//  import Picturecard from "./PictureCard";
import axios from "axios";

const PictureGrid = () => {
  const [picture, setPictures] = useState({})

  useEffect(() =>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=MHX42tHEfMNTRf9gMKmBag0QyNV79mLI3LEbXTJB
    `)
    .then(res => {
    console.log(res);
    setPictures(res.data);
  }) 
  .catch((err)=> console.log(err));
},[])

   return(
     <div>
    <img className="picture-image" alt="photo-ofday" src={picture.hdurl}/>
    <p>{picture.explanation}</p>
    </div>
   )

   
}

export default PictureGrid;