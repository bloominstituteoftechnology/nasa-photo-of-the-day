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

        <PhotoCard />;
        <img src={photos.url}/>
        <h1> {photos.title} </h1>
        <p>{photos.explanation}</p>
        

    </div>
);    
}