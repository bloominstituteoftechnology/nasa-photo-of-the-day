import React from 'react'

const Picture = (props) => {
    const {image}=props
    return (
        <div>
            <img src={image} alt='Space picture'/>
        </div>
    )
}

export default Picture