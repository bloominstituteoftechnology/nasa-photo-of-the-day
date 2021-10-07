import React, {useEffect, useState} from "react";
import axios from 'axios'
import styled from 'styled-components'

const StyledPhoto = styled.img`
    max-width:100%;
    height:auto;
`


function Photo() {
    
const apiKey = '1Qg5Hb00n3IJDrbRLm8Um2zoXqJwFg6vZhSLcWm2';

const [nasaPhoto, setNasaPhoto] = useState('');

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(res => {
            setNasaPhoto(res.data.url);
          //setDetails(res.data)
        }).catch(err => {
          console.error(err);
        })
      }, [])



    return(
        <StyledPhoto src={nasaPhoto} alt="nasa space"/>
    )

}
  





export default Photo;