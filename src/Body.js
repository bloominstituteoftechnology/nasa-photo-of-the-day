import React from 'react'
import './Body.css'

function Body(props) {
    const { photo, info } = props
    return (
        <div>
            <img src={photo}
                className="big" />
            <p>{info}</p>

        </div>
    )
}
export default Body