import React, {useState, useEffect } from 'react';
import axios from 'axios';
import PictureCard from './PictureCard';

export default function MainPage (){
    const [picture, setPicture] = useState ({});
    

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(response => {
            //console.log(response.data)
            setPicture(response.data);
          })
          .catch(error => {
            console.log("no space in your space, space cadet", error);
          });
      }, []);
      return (
        <div className= "container">
        < img src={picture.hdurl} alt="yadda"/>
        <div className = "texts">
            <h2 className = "copyright">{picture.copyright}</h2>
            <p className = "explanation">{picture.explanation}</p>
            <p className = "date">{picture.date}</p>
        </div>
        </div>

      )




}



  



