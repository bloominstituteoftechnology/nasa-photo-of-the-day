import React from 'react'

function Body(props) {
    const { photo, info } = props
    return (
        <div>
            <img src={photo}
                className="bodyPic" />
            <h3>Read below to learn more about the photo of the day from NASA!</h3>
            <p>{info}</p>

        </div>
    )
}
export default Body