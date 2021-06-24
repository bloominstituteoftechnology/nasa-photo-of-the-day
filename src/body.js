import React from 'react'
import styled from 'styled-components'

const Para = styled.p`
    font-family: 'Courier New', Courier, monospace;
    font-weight: 300;
    padding-right:10%;
    padding-left:10%;
    padding-top:5%;
    padding-bottom:3%;
  
`

function Body(props) {
    const { photo, info } = props
    return (
        <div>
            <img src={photo}
                className="bodyPic" />
            <h3>Read below to learn more about the photo of the day from NASA!</h3>
            <Para>{info}</Para>
            

        </div>
    )
}
export default Body