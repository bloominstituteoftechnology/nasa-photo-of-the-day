import React from "react"


const MovieInfo = ({src,episode,title,director,description,release}) => (

    <div className ="container">
        <img alt = "me" src = {src} className = "moviePics"  height = "400" width = "400" ></img>
        <div>
        <h2>Ep{episode}: {title} </h2>
        <h3>Directed by : {director}</h3>
        <p> {description}</p> 
<p>Realease Date : {release}</p>
        </div>
        </div>



);

export default MovieInfo;