import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Video = (props) => {
    const { title = "Charlie Puth - Mother [Official Video]", url = "https://www.youtube.com/watch?v=jTMzLbz9_r0" } = props

    return (
        <StyleVideo>
            <div className="video">
                <ReactPlayer
                    url={ url }
                    width='100%'
                    height='100%'
                />
            </div>
            <h2>{ title }</h2>
        </StyleVideo>
    )
}

export default Video

const StyleVideo = styled.div`
    box-shadow: ${(pr) => pr.theme.mediaShadow}
`;

// Video.PropTypes = {
//     title: PropTypes.string.isRequired
//     url: PropTypes.string.isRequired
// }