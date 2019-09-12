import React, { useEffect, useState } from "react";
import axios from "axios";
import IODCard from "./IODCard";

export default function PhotoList(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(resp => {
                const photo = resp.data;
                console.log("this is it", photo);
                setPhoto(photo);
            })
            .catch(error => {
                console.log("wooooow", error);
            });
    },[]);

    return (
        <div className="photo">
            <IODCard
            title= {photo.title}
            picture={photo.url}
            date={photo.date}
            description={photo.explanation}
            />

        </div>
    )
} 