import React, { useState, useEffect } from 'react'

const Description = (props) => {

    // const [ image, setImage ] = useState(null);
    const [ description, setDescription ]  = useState(props.data.explanation);
    const [ title, setTitle] = useState(props.data.title);
    console.log(title)

    return (
        <div className = "description-containter">
            <h2>{title}</h2>
            <p></p>
        </div>
    )
}

export default Description;