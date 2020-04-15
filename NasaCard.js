import React from "react";

const NasaCard = props => {
    return (
        <div className="nasa-card" key="https://api.nasa.gov/planetary/apod?api_key=Nq2Bz5TI0xPZVJ0CGy43w6zjqFC8QTZuFfJdo3VS">
            <img className="nasa-image" alt="random nasa pic" src={props.imgUrl} />
            <h2>NASA</h2>
        </div>
    )
}
export default NasaCard;