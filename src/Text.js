import React, { useState, useEffect } from "react";
import axios from 'axios'



const TextCreator = props => {
    const [text, setText] = useState(false)
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL')
            .then( resp => {
                // console.log(resp.data.explanation)
                setText(resp.data.explanation)
            })
    }, [])
    const displayText = () => {
        setDisplay(!display)
        console.log('displaying text description')

    }


    return (
        <div className= "imgDescription">
            <button id= 'displayText' onClick = {displayText}>{display? "Hide": "Show"} Description</button>
                {text && !display && <p id="textDisplay"> {text}</p>}
        </div>
    )
}

export default TextCreator