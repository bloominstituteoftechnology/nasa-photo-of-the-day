import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function PhotoList() {

const [photos, setPhotos] = useState([]);

useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=cCT6X5kWMjBBdQfhvqzWXZY3KP8Ivtsb7vtbrnbY')
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log("the data was not returned",error)
})
}, [])
return (
    <div className = "photo">


    </div>
)    
}