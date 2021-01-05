import React from "react";
import './AstronomyPicture.css'

export default function  AstronomyPicture (props) {
  
    const { dailyAstronomyEvent } = props;
  
    return (
        <img 
        className='astronomy-image'
        alt='logo192.png'
        className='post-thumb'
        src={dailyAstronomyEvent.hdurl}
      />

    );
  };