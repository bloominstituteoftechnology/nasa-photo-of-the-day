import React from "react";

const NasaCard = props => {
    
    return (
        <div className='img-holder'>
            <img src={props.url} alt={props.title}/>
        </div>
    )
}

export default NasaCard;





