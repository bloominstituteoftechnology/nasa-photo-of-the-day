import React, {useState, useEffect} from "react";
import "./card.css"
import Title from "./Title/Title.js"
import Date from "./Date/Date.js"
import Image from "./Image/Image.js"
import Explination from "./Explination/Explination.js"

export default function Card(){
    return (
        <div className="card-container">
            <Title />
            <Date />
            <Image />
            <Explination />
        </div>
    )
}