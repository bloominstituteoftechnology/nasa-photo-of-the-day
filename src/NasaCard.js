import React from "react";

const NasaCard = props => {
    console.log(props, "props")
    return (
        <div className="nasa-card" key="">
            <img className="nasa-image" alt="random nasa pic" src={props.url} />
            <h2>{props.title}</h2>
        </div>
    )
}
export default NasaCard;