import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";

const Img = (props) => {

    const {apod} = props

    return (
        <img alt="Nasa img of the day" src = {apod.url}></img>
    )
}

export default Img