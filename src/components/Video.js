import React from 'react'
import styled from 'styled-components'

const VideoWrap = styled.iframe`
    width: 854px;
    height: 480px;
    border: 6px solid #348E8F;
`

const Video = props => {

    const {URL} = props

    return (
        <div>
            <VideoWrap src={URL}/>
        </div>
    )
}

export default Video