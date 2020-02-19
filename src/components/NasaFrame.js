import React, {useState, useEffect} from "react";
import NasaPhoto from "./NasaPhoto";
import axios from "axios";

export default function NasaFrame() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=TY72bnY30WJyd82SWh5ZKlsHB15yuarKW3gVZgQ6')
            .then(response => {
                console.log(response.data);
                setPhoto(response.data);
            })
            .catch(error => {
                console.log("the data was not returned", error);
            });
    }, [])
    return (
        <div className = "frame">
            <NasaPhoto 
            title = {photo.title}
            date = {photo.date}
            explanation = {photo.explanation}
            picture = {photo.url}
            />
        </div>
    )
}