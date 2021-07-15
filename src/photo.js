import React from 'react'

export default function Photo(props) {
    const {photo} = props
    
    return(
        <div >
        <h2>{photo.title}</h2>
        <figure>
        <img src={photo.url} alt ='test' />
        <figcaption>{photo.date}</figcaption>
        <figcaption>Credit and copyright:{photo.copyright}</figcaption>
        <figcaption>{photo.explanation}</figcaption>
        </figure>
        </div>
    
    )
}