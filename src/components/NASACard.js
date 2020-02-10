import React from "react";

const NASACard = (props) => {
    return (
        <div key={props.id}>
            <h4>{props.date}</h4>
            <img src={props.imgUrl} alt="NASA" />
            <h2>{props.title}</h2>
            <p>{props.explain}</p>
        </div>


    )
}

export default NASACard;