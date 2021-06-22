import React from 'react'

function Body(props) {
    const { photo, info } = props
    return (
        <div>
            <img src={photo}
                className="bodyPic" />
            <p>{info}</p>

        </div>
    )
}
export default Body