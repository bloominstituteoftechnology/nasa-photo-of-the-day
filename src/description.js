import React, { useState, useEffect } from 'react'

const Description = (props) => {

    // const [ image, setImage ] = useState(null);
    const description  = props.data.explanation;
    const dataTitle= props.data.title;
    
    return (
        <div className = "description-container">
            <h2>{ dataTitle }</h2>
            <p>{ description }</p>
        </div>
    )
}

export default Description;