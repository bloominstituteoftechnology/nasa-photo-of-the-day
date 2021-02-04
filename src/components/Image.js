import React from 'react'

const Image = ({ src, alt, date }) => {
    return (
        <div className="Image">
            <img src={src} alt={alt} />
            <span><strong>Date:</strong> { date }</span>
        </div>
    )
}

export default Image;