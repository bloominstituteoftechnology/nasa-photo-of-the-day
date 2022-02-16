import axios from "axios";
import React, { useState, useEffect } from "react";



const ImageCreator = props => {
    const [image, setImage] = useState(null)

    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL')
        .then(resp => {
            console.log(resp.data.url)
            setImage(resp.data.url)
        })
        .catch(err => console.error(err))
    }, [])

return(
<div className= "imgContainer">
           <img /> 
        </div>
)
}

export default ImageCreator