import React, { useEffect, useState } from "react";
// import axios from "axios";
import PictureCard from "./PictureCard";

export default function PictureList(){
    const [picture, setPicture] = useState([])

    // const didUpdate = () => {
    //     axios
    //     .get ("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    //     .then (response => {

    //         setPicture(response.data);
    //         console.log(response);
    //     })
    //     .catch(error => console.log(error));
    // }

    // useEffect(didUpdate, []);
    
    return (
        <div className="picture">
           
        </div>
    )


};


