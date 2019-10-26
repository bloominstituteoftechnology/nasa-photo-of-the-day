import React from "react";

const NasaCard = props => {
    
    return (
        <div className='img-holder'>
            <img src={props.url} alt={props.title}/>
            {props.explanation}
            {props.title}
            {props.media_type}
            {props.service_version}
            {props.url}
            {props.hdurl}
        </div>
    )
}

export default NasaCard;





