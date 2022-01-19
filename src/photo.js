import React from "react";

const Photo = props => {
    const { photo } = props

    return (
        <div className="photo">
            <img src= {photo.url} alt='dailyPhoto'></img>
'
        </div>
    )
}

export default Photo;