import React from 'react'

export default function Image({imageUrl, copyright}) {
    return (
        <div>
            <img src={imageUrl} alt="Cool Image From Nasa"></img>
            <p>{copyright}</p>
        </div>
    )
}
