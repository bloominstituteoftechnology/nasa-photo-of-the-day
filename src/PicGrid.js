import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";


function PicGrid() {
    const [nasaData, setNasaData] = useState({})
    // const [pic, setPic] = useState("spaceship");
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Nq2Bz5TI0xPZVJ0CGy43w6zjqFC8QTZuFfJdo3VS`)
        .then(response => {
            console.log(response.data) 
            setNasaData(response.data)
        })
            // response => setNasaData(response.data.message));
    }, []);

    return (
        <div className="container">
            <button>pic</button>
            <div className="entry">

                <NasaCard {...nasaData} />

        </div>
    </div>
    )
}
export default PicGrid