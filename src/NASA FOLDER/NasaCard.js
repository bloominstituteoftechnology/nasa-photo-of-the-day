import React from "react";
// import NasaPic from "./NasaPic";

const NasaCard = props => {
    console.log(props);
    return (
        <div className="pic-list" key={props.id}>
            <h1>Picture Title: {props.title}</h1>
            <img src={props.hdurl} alt="Random NASA"/>
            <p>Date: {props.date}</p>
            <p>Description:{props.explanation}</p>
        </div>
    )
}

export default NasaCard;