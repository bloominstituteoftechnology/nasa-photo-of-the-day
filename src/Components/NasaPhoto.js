import React from "react";

const NasaPhoto = (props)=>{
    return(
        <div ClassName="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.data}</p>
            <img src={props.photo.hdurl}/>
            <p ClassName='explanation'>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;