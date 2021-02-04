import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({ src }) => {
    return (
        <div className="Video">
            <ReactPlayer url={src} width='100%' />
        </div>
    )
}

export default Video;



