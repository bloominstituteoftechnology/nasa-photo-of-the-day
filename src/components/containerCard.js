import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./photoCard";


export default function ContainerCard () {
const[photo, setPhoto] = useState([]);

useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=ietbMUrbmQZsTwOPejf1okcsyd98SN08yynF6Vlw")
    .then(response => {
        console.log(response.data);
        setPhoto(response.data);
    })
    .catch(error => {
        console.log(`Fail, why`, error);
    });

}, []);

return (

        <div className="photo_container">
        <PhotoCard
        title = {photo.title}
        date = {photo.date}
        src = {photo.hdurl}
        description = {photo.explanation}
        />
        </div>
);
}