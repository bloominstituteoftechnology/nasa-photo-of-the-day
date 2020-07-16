import React from "react"
import styled from 'styled-components'


const Photo = props => {

    const { photo } = props

    return (
    <div>
        <h2>{photo.title}</h2>
        <div>
        <img
            alt = {photo.title}
            src = {photo.url}
            className = "apod-img"
        />
        </div>
        <p>{photo.explanation}</p>
    </div>
    
    )
}


export default Photo