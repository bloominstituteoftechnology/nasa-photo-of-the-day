import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Video = (props) => {
    const { title, url } = props

    return (
        <>
            <div className="video">
                <ReactPlayer
                    url={ url }
                    width='100%'
                    height='100%'
                />
            </div>
            <h2>{ title }</h2>
        </>
    )
}

export default Video

// Video.PropTypes = {
//     title: PropTypes.string.isRequired
//     url: PropTypes.string.isRequired
// }