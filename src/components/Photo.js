import React from 'react'

const Photo = (props) => {
    
    const { data } = props

    return (
        <div>
            <img src={data.url} />
            <button>Previous Button</button>
            <p>{data.explanation}</p>
            <button>Next Photo</button>
        </div>
    )
}

export default Photo