import React from "react";

let NasaCard = (props) =>{
    
    return (
        <div className='card-container'>
            <img src={props.nasaData.url}/>
            <p>{props.nasaData.explanation}</p>
        </div>
    );
}

export default NasaCard;