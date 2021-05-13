import React from 'react'

function NasaMedia (props) {

    const {nasaImg, mediaType} = props

    return (
        <div>
            <img src={nasaImg}/>
            <h1>{mediaType==="image" ? "Image" : "Video"} of the Day</h1>
        </div>
    )
}

export default NasaMedia;