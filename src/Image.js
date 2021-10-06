import React, { useState, useEffect } from 'react'


const Image = (props) => {

    // const [ image, setImage ] = useState(null);
    const image  = props.data.url;
    
    
    return (
        <div className = "description-container">
            <img src={image} alt='something'/>
        </div>
    )
}

export default Image;