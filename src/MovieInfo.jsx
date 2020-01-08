import React from "react"


const MovieInfo = (props) => (

    <div className ="movieContainer">
        <img src = {props.src} className = "moviePics"  height = "300" width = "300" ></img>

<h2>Ep{props.episode}: {props.title}</h2>
    </div>



);

export default MovieInfo;