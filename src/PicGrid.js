import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaHeader from "./NasaHeader";
import NasaCard from "./NasaCard";
import styled from 'styled-components'


const Button = styled.button`
    padding: 10px 30px;
    margin: 30px;
    border: none;
    border-radius: 8px;
    color: black;
    backgroun-color: white;

    ${props => (props.type ==='NASA' ? `background: #2196f3;` : null)}

`;

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
        <div className="Container">
        
                <div className="entry">
                <NasaHeader {...nasaData} />
                <NasaCard {...nasaData} />
                <Button type="NASA">Click for the next NASA photo!</Button>
                </div>
        
            </div>
    )
}
export default PicGrid