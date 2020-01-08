import React, { useEffect, useState } from "react";
import axios from "axios";
import PictureCard from "./PictureCard";

export default function PictureList(){
    const [picture, setPicture] = useState([])

    const didUpdate = () => {
        axios
            .get ("https://api.nasa.gov/planetary/apod?api_key=s0zNjpbfiiM7FI7UhsxFv0X0IqmhdkxtMJ2QzAfg")
            .then (response => {

                setPicture(response.data);
                console.log(response);
            })
            .catch(error => console.log("The data was not returned", error));
    }

    useEffect(didUpdate, []);
    
    return (
        <div className="picture">
           {picture.map(picture => {
               return <PictureCard picture={picture} copyright={picture.copyright} date={picture.date} explanation={picture.explanation} />
           })}
        </div>
    )


};


