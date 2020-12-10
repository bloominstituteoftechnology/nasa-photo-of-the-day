import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player"
import Title from "./title"
import Desc from "./description"


const APOD = (props) => {
    const { apod } = props
    return <div className="hero-image-container">
            <Title apod = {apod} />
            <ReactPlayer url={apod.url} />
            <Desc apod = {apod} />
        </div>
}



export default APOD