import React from 'react'
import ReactPlayer from 'react-player'

const Video = (props) => {
    const { title, url } = props

    return (
        <div className="media">
            <div className="video">
                <ReactPlayer
                    url='{https://www.youtube.com/watch?v=ysz5S6PUM-U}'
                    width='100%'
                    height='100%'
                />
            </div>
            <h2>{ 'Soy un Video' }</h2>
        </div>
    )
}

export default Video