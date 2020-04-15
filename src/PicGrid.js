import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";


function PicGrid() {
    const [nasaData, setNasaData] = useState([])
    const [pic, setPic] = useState("spaceship");
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Nq2Bz5TI0xPZVJ0CGy43w6zjqFC8QTZuFfJdo3VS`)
        .then(response => setNasaData(response.data.url))
            // response => setNasaData(response.data.message));
    }, [pic]);

    return (
        <div className="container">
            <button onClick={() => setPic("pic")}>pic</button>
            <div className="entry">
            {nasaData.map(url => (
                <NasaCard key={url} pic={"spaceship"} imgUrl={url} />
            ))}
        </div>
    </div>
    )
}
export default PicGrid