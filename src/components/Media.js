import React from 'react'
import ReactPlayer from 'react-player'


const Media = (props) => {
    const { media_type, url } = props

    const showImage = () => {
        console.log('Soy una imagen sexi!')
    }

    const showVideo = () => {
        console.log('Reproduceme!')
    }

    return (
        <div className="media">
            <div className="video">
                <ReactPlayer
                    url='{https://www.youtube.com/watch?v=ysz5S6PUM-U}'
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    )
}

export default Media