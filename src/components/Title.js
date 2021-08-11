import React from 'react'

export default function Title(props) {
    const { title } = props;
    return (
        <div>
            <h2 className='picture-title'>The title of the picture: {title}</h2>
        </div>
    )
}