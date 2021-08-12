import React from "react";

function Photo(props) {
    const { photo } = props;

    return (
        <div className='photoContainer'>
            <img src={ photo } alt='Astronomy Pic of the Day'/>
        </div>
    )
}

export default Photo;