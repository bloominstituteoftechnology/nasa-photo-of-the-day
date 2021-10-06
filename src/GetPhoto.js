import React, {useEffect, useState} from "react";
import axios from 'axios'

function GetPhoto(){

const apiKey = '1Qg5Hb00n3IJDrbRLm8Um2zoXqJwFg6vZhSLcWm2';

const [nasaPhoto, setNasaPhoto] = useState('');

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(res => {
            console.log(res.data.url);
            setNasaPhoto(res.data.url);
          //setDetails(res.data)
        }).catch(err => {
          console.error(err);
        })
      }, [])



    return(
        <img src={nasaPhoto}/>
    )

}

export default GetPhoto;

