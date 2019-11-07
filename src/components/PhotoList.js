import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default PhotoList() {
 const[photo, setPhoto] = useState([]);

 useEffect(() => {
     axios
     .get("https://api.nasa.gov/planetary/apod?api_key=TyBY2uhZ2HP5ZipYNT7ocoGT8Rbim191rgoHwcCx")
         .then(response => {
         console.log(response.data)
     }).catch("Photo Not Found", error);
 },[]);

return (
    <div className="Photo">
        <PhotoCard
        title={photo.title}
        picture={photo.url}
        date={photo.date}
        description={photo.explanation}
        
        />

    </div>
)
}