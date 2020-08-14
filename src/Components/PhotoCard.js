import React from 'react'
// import PhotoList from './PhotoList'

const PhotoCard = (props) => {
console.log (props)
    return (
        <div className = "photo-OTD">
            <h2>{props.title}</h2>
            <h3>Date: {props.date}</h3>
            <h4>Photo by: {props.copyright}</h4>
            <p>{props.explanation}</p>
            <img src={props.url} alt = "space photos"/>
        </div>
           
    )
}

export default PhotoCard



