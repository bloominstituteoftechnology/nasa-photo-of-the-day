import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgInfo from "./ImgInfo";

const ImgCard = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [explanation, setExplanationText] = useState();

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=zEe8JdVzvWbwlbJTLRbPP6gyBXldLaRI3Cg08sPs')
            .then(response => {
                setTitle(response.data.title);
                setDate(response.data.date);
                setImage(response.data.url);
                setExplanationText(response.data.explanation);
                console.log(response);
            });
    }, []);

    return (
        <div className="container">
            <ImgInfo title = {title} image = {image} day = {date} text = {explanation} /> 
        </div>
    )
}

export default ImgCard; 