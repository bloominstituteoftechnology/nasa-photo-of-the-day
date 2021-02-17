import React from 'react'

const Image = props => {

    const {URL, title} = props

    return (
        <div>
            <img src={URL} alt={title}/>
        </div>
    )
}

export default Image