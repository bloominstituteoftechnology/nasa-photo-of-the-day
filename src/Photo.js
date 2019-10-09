import React, { useState, useEffect } from "react";
import "./Photo.css";
import axios from "axios";

function Photo() {
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=CdR7WVJSUDdSq37rTIIo3tr7DNsUBfTv3zalYquD`)
            .then(response => {
                // console.log(response.data);
                setPhotoData(response.data);
            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);

    return (
        <div className="photo">
            <p>{photoData.date}</p>
            <img src={photoData.url} alt="#" />
            <p>
                <strong>{photoData.title}</strong>            
            </p>
            <p>
                <strong>Image Credit: </strong>
                <a href="https://www.nasa.gov/">NASA</a>,<a href="https://www.esa.int/About_Us/Welcome_to_ESA">ESA</a>,
                <a href="https://hla.stsci.edu/">Hubble Legacy Archive</a>;
            </p>
            <p>
                <i>Processing & Copyright: </i>
                <a href="https://www.astrobin.com/users/Rudy_Pohl/">Rudy Pohl</a>
            </p>
            <p>
                <strong>Explanation:</strong> {photoData.explanation}            
            </p>
            <p>
                <strong>Tomorrow's picture:</strong> the window seat             
            </p>
                    
        </div>
    );
}

export default Photo;
