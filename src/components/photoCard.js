
import React from "react";
import axios from "axios";
import PhotoCard from "./photoCard";


const photoCard = props => {
    console.log(props)

    return (
        <div className="photoCard">
            <img className="image" src={props.src} alt="NASA pic of the day" />
            <h2>Photo Title: {props.title}</h2>
            <h3>Photo: {props.date}</h3>
            <p>Photo Description: {props.description}</p>
        </div>
    )
}

export default photoCard;
