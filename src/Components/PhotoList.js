import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default function PhotoList() {

const [photos, setPhotos] = useState([]);

useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=cCT6X5kWMjBBdQfhvqzWXZY3KP8Ivtsb7vtbrnbY')
.then(response => {
    
setPhotos(response.data)
console.log(response.data)
    
})
.catch(error => {
    console.log("the data was not returned",error)
})
}, [])
return (
    
    <div className = "photo">

    {photos.map(photo => {
        return (
            <PhotoCard
            title = {photo.title}
            about = {photo.explanation}
             />
        )
    })}

    </div>
)    
}