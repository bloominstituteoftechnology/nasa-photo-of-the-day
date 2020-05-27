import React from "react";
// import Card from "./Card";

function CardData(props) {
    console.log('props from CardData', props.data)
    
    if (!props) return <p>Loading...</p>

    return (
    <div className="photo-info">

        <div className="info-header">
            <p>Date: {props.data.date}</p>
            <p>Copyright: {props.data.copyright}</p>
        </div>
        <div className="photo-story">
            <p>{props.data.explanation}</p>
        </div>
        
    </div>
    );
    
    
}

export default CardData;
