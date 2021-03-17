import React from "react";

const Img = props => {        // Img = the props function, which is an object destructuring of 'image', which then equals props itself.
    const {image} = props
    return (   // props returns: 
        <img
            alt = 'APOD'  // Alternate display if image does not load
            className = 'idkyet'  // className for targeting later with CSS changes
            src = {image}   // source of the image to be displayed
        /> 
    )
}

export default Img;