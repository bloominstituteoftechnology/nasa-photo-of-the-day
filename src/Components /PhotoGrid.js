import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


export default function PhotoGrid() {
    const [apod, setApod] = useState([])
    
    
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=JGc05SwRWJEvdWn8i6Qjy4h8oDo3x4yupfTqfBQC`)
        .then(response => {
            console.log(response.data)
            setApod(response.data)
        })
        .catch(error=> {
            console.log("data was not retrieved", error);
        })
    },[])
    
    
    
    return (
        <div className="container">
            <PhotoCard 
            title={apod.title}
            explanation={apod.explanation}
            imgUrl={apod.url}
            date={apod.date}

            />
                
           
        </div>

    );
}
