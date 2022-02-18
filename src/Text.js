import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled, {keyframes} from 'styled-components'

const kf= keyframes`
100% {
    opacity: 1
}


`
const StyledText = styled.div`
color: blue;
background-color: gray;

`
const StyledAppearance= styled.p`
opacity: 0;
animation: ${kf} 1s ease-in-out`
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
        <StyledText className= "imgDescription">
            <button id= 'displayText' onClick = {displayText}>{display? "Show": "Hide"} Description</button>
                {text && !display && <p id="textDisplay"> {text}</p>}
        </StyledText>
    )
}

export default TextCreator