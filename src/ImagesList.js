import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import ImageCard from "./ImageCard";



export default function ImagesList(){
    const [image, setImage]= useState({});

    useEffect(() =>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response =>{
            console.log(response.data)
            setImage(response.data)
        })
        .catch(error =>{
            console.log(error);
        })
    },[]);

    return(
        <div>
            {
                <ImageCard key={image.data} title={image.title}
                saywhat={image.explanation} Img={image.hdurl} date={image.date} copyright={image.copyright}/>
            }
        </div>
    );
}


