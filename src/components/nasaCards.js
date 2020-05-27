import React from "react";
import NasaPic from "./nasaPic"

const NasaCards = (props) => {
    console.log(props)

return(
    <div className="row">
        <div>
            <NasaPic img={props.nasaInfo.hdurl}/>
        </div>
        <div className="textContainer">
            <h2>{props.nasaInfo.title}</h2>
            <h4>Date:{props.nasaInfo.date}</h4>         
            <p>{props.nasaInfo.explanation}</p>  
        </div>

    </div>)

}

export default NasaCards;