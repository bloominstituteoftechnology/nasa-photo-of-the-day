import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background:#1cc5dc;
`

const ImageOfDay = styled.img`
padding:10rem;
justify-content:center;
align-items: center;
`

const ImageH1 = styled.h1`
font-size:5rem;
background:#890596;
margin:0;
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
        <Container>
            <ImageOfDay src={nasaImg}/>
            <ImageH1><EmojiMaker label="vulcan" symbol="🌌"/>{mediaType==="image" ? "Image" : "Video"} of the Day</ImageH1>
        </Container>
    )
}

export default NasaMedia;