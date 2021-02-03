import React from 'react'

const Video = ({ src }) => {
    return (
        <div className="Video">
            <iframe width="100%" height="361" src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video;



