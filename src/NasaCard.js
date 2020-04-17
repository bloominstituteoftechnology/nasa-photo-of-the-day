import React from "react";
import styled from 'styled-components'



const NasaCard = props => {
    console.log(props, "props")
    return (
        <div className="nasa-card" key="">
            <img className="nasa-image" alt="random nasa pic" src={props.url} />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    )
}
export default NasaCard;