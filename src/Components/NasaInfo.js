import React from 'react'
import styled from 'styled-components'

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

const Container = styled.div`
background:#f5f7b2;
display:flex;
justify-content:center;
flex-direction:column;
`
const H3Style = styled.h3`
border-bottom:5px solid #cf0000;
width:50%;
margin-left:25rem;
`
const SpanColor = styled.span`
color:#890596;
`
const PStyle = styled.p`
font-size:1rem;
font-weight:bold;
`

function NasaInfo(props) {
    
    const {explanation, title, date} = props
    
    return (
        <Container>
            <H3Style>The Title Of This Picture Is: <SpanColor>{title}</SpanColor></H3Style>
            <H3Style>The Date Of The Picture Is: <SpanColor>{date}</SpanColor> </H3Style>
            <PStyle>{explanation}</PStyle>
        </Container>
    )
}

export default NasaInfo;