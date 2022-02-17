import axios from "axios";
import React, {useState} from "react";



function ImageCreator() {
    const [image, setImage] = useState(null)
   
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL')
        .then(resp => {
            // console.log(resp.data.url)
            setImage(resp.data.url)
        })
        .catch(err => console.error(err))
    
 

return(
        <div className= "imgContainer">
           <iframe title= 'hello' width= '800' height = '400' src={image}/> 
        </div>
)
}

export default ImageCreator