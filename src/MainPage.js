import React, {useState, useEffect } from 'react';
import axios from 'axios';
import PictureCard from './PictureCard'

export default function MainPage (){
    const [picture, setPicture] = useState ({});

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(response => {
            // console.log(response)
            setPicture(response.data.message);
          })
          .catch(error => {
            console.log("no space in your space", error);
          });
      }, []);
      return (
        <div>
            {picture.map((pic, index) =>{
                return < PictureCard key={index} imgUrl ={pic} />
            })}
        </div>


      )




}



  

  //export default MainPage;

