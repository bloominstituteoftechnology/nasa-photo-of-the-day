import React from "react"

const Photo = props => {

    const { photo } = props

    return (
    <div>
        <h2>{photo.title}</h2>
        <img
            alt = {photo.title}
            src = {photo.url}
            className = "apod-img"
        />
        <p>{photo.explanation}</p>
    </div>
    
    )
}


export default Photo