import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background:#1cc5dc;
color:#890596;
`

const ImageOfDay = styled.img`
padding:2rem 10rem;
justify-content:center;
align-items: center;
`

const ImageH1 = styled.h1`
border-bottom:5px solid #cf0000;
font-size:8rem;
background:#1cc5dc;
margin:0;
padding:3rem;
`
const Quote = styled.h3`
font-size:2rem;
padding-left:30rem;
width:50%;
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
            <Quote>"He who can no longer pause to wonder and stand rapt in awe, is as good as dead; his eyes are closed." - Albert Einstein</Quote>
            <ImageOfDay src={nasaImg}/>
            <ImageH1><EmojiMaker label="vulcan" symbol="🌌"/>{mediaType==="image" ? "Image" : "Video"} of the Day</ImageH1>
        </Container>
    )
}

export default NasaMedia;