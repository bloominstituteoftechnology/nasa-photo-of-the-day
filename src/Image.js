import axios from "axios";
import React, {useState} from "react";
import styled from 'styled-components'

const StyledImage = styled.div`
background-color:teal;
border-radius: 10%;

`
function ImageCreator() {
    const [image, setImage] = useState(null)
    const [mediaType, setMediaType] = useState()

    axios.get('https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL')
        .then(resp => {
            // console.log(resp.data)
            setImage(resp.data.url)
            setMediaType(resp.data.media_type)
        })
        .catch(err => console.error(err))
    
 

return(
        <StyledImage className= "imgContainer">
            {mediaType === 'video' ? (
            <iframe title= 'APOD video' width= '800' height = '400' src={image}/> ) : (
            <img src={image} alt= "APOD IMAGE"/>)}
           
        </StyledImage>
)
}

export default ImageCreator