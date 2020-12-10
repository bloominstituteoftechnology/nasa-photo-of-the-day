import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player"

const APOD = (props) => {
    const { video } = props
    return <div className="hero-image-container">
            <ReactPlayer url={video.url} />
        </div>
}



export default APOD