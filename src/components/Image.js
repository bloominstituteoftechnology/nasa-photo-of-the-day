import React from 'react';
import styled from 'styled-components'

const StyleDiv = styled.div`
width: 30%
display: flex;
padding 10px;
justify-content: center;
border: 2px solid black;
`

export default function Image(props) {
    const {data} = props;

    return (
        <StyleDiv>
            <h1>Today's date is {data.date} and today's image is {data.title}</h1>
            <img alt = "NASA IMAGE OF THE DAY!" src = {data.url}/>
            <h2>{data.explanation}</h2>
        </StyleDiv>
    )
}