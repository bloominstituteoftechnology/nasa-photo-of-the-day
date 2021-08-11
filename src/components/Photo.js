import React, { useState } from "react";


function Photo(props) {
    const { photo } = props;

    return (
        <div className='photoContainer'>
            <img src={ photo } />
        </div>
    )
}

export default Photo;