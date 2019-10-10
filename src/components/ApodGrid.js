import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Photo from "./Photo";
import Description from "./Description";


export default function ApodGrid() {
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Jq9X7EXhKfWPBzMaibDMLMZxtJUglf3VydWN2av3`)
        .then(response => {
            console.log(response.data);
            setPhotoData(response.data);
        })
        .catch(error => {
            console.log("No data found!", error);
        })
    }, []);

    return(
        <div className="container">
            <div className="header">
                <Header 
                photoDate={photoData.date}
                />
            </div>
            <div className="image">
                <Photo
                photoTitle={photoData.title}
                photoData={photoData.url}
                />
                <div className="explanation">
                    <Description 
                    photoDesc={photoData.explanation}
                    />
                </div>
            </div>
        </div>
    )
}