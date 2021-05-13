import React from 'react'
import styled from 'styled-components'

const ImageOfDay = styled.img`
width:75rem;
`

const ImageH1 = styled.h1`
background-color:turquoise;
`

const EmojiMaker = props => (
    <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

function NasaMedia (props) {

    const {nasaImg, mediaType} = props

    return (
        <div>
            <ImageOfDay src={nasaImg}/>
            <ImageH1><EmojiMaker label="vulcan" symbol="🖖🏻"/>{mediaType==="image" ? "Image" : "Video"} of the Day</ImageH1>
        </div>
    )
}

export default NasaMedia;