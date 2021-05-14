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
`

function NasaInfo(props) {
    
    const {explanation, title, date} = props
    
    return (
        <Container>
            <div>
            <h3>Date of Picture is {date}</h3>
            <h3>Title Of Picture is {title}</h3>
            <p>{explanation}</p>
            </div>
        </Container>
    )
}

export default NasaInfo;