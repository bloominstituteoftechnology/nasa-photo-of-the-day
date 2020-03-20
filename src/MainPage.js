import React, {useState, useEffect } from 'react';
import axios from 'axios';
import PictureCard from './PictureCard'

export default function MainPage (){
    const [picture, setPicture] = useState ([]);
    

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
        
        <div>
           <PictureCard/>
        </div>

      )




}



  

  //export default MainPage;

