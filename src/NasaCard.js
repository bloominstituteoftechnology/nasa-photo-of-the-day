import React from "react";

const NasaCard = props => {
    return (
        <div className="nasa-card" key="">
            <img className="nasa-image" alt="random nasa pic" src={props.imgUrl} />
            <h2>NASA</h2>
        </div>
    )
}
export default NasaCard;