import React from 'react'

const Video = props => {

    const {URL} = props

    return (
        <div>
            <iframe width="420" height="315"
                src={URL}>
            </iframe>
        </div>
    )
}

export default Video