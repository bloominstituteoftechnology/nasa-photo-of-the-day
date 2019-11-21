import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

function PhotoDisplay() {
    const [photos, setPhotos] = useState([]);


    useEffect(()=> {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=l1YmSTQeiT2I9N2BoMBIU6dMhfu28chM88RFNqOT")
        .then(Response => {
            console.log(Response.data.url)
            setPhotos(Response.data.url)
        }).catch(error=> {
            console.log(error)
        })
    }, [])
    return (
        <div className='container'>
            <PhotoCard srt ={photos} alt="NASA Photo of the Day"/>
        </div>
    );
}

export default PhotoDisplay;