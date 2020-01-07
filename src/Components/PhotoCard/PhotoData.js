import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoData() {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q')
        .then(response => {
            setPhotos(response.data)
            // console.log(response.data.hdurl)
        })
        .catch(err => {
            console.log("The photo was not returned", err);
        })
    }, []);
//   console.log('photos', photos );

    return (
        <div className="Photo">
  
                    <PhotoCard 
                    key={photos.hdurl}
                     />
                
           
        
        </div>
    )

}

