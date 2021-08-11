import React from 'react'

function Image(props) {
    const { url } = props

    return (
        <div>
            <img src={url}></img>
        </div>
    )
}


export default Image