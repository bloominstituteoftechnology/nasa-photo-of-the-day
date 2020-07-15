import React from 'react'

export default function(props){
    const {image} = props


    return (
        <div>
            <img src={image.url}></img>
            <h2>{image.title}</h2>
            <p>{image.explanation}</p>
        </div>
    )
}