import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ApodImage() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Jq9X7EXhKfWPBzMaibDMLMZxtJUglf3VydWN2av3/`)
        .then(response => {
            console.log(response.data);
            setImage(response.data);
        })
        .catch(error => {
            console.log("No data found!", error);
        })
    }, []);

    return(
        <div className="image">
            <ApodImage
            image={image.image}
            />
        </div>
    )
}