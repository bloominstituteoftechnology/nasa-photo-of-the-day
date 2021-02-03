import React from 'react'

const Image = ({ src, alt, credits }) => {
    return (
        <div className="Image">
            <img src={src} alt={alt} />
            <span>{ credits }</span>
        </div>
    )
}

export default Image;