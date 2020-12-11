import React, {useState, useEffect} from "react";
 //Incase of a needing to embed a VIDEO
import Title from "./title"
import Desc from "./description"
import Img from "./Components/Image/image"

const APOD = (props) => {
    const { apod } = props
    return <div className="hero-image-container">
            <Title apod = {apod} />
            <Img apod = {apod} />
            <Desc desi = {apod.explanation} />
        </div>
}

export default APOD;
