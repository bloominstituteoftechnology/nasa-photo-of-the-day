import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default function PhotoList() {

const [photos, setPhotos] = useState([]);

useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=cCT6X5kWMjBBdQfhvqzWXZY3KP8Ivtsb7vtbrnbY')
.then(response => {
    
setPhotos(response.data)

   
})
.catch(error => {
    console.log("the data was not returned",error)
    
})
}, [])

if (!photos)  return <h1>loading.....</h1>

return (
    
    <div className = "photo">

        <PhotoCard />
        <h2> {photos.title} </h2>
        <h3> Date:{photos.date}</h3>
        <h4> Photo by:{photos.copyright} </h4>
        <p>{photos.explanation}</p>
        <img src={photos.url}/>
        
        
    </div>
);    
}