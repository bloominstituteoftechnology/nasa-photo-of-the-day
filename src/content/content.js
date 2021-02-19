import React from 'react'
import styled from 'styled-components'
const StyledDate = styled.p`
    font-style: italic;
    color: gray;
`
const StyledExp = styled.p`
    width: 80%;
    margin-left:10%;
    word-spacing:4px;
    text-align: justify;
    text-justify: inter-word;
`
const Content = props => {
    const { data } = props;
    console.log(data)
    console.log(`The date: ${data.date ? data.date.substring(8,10) : undefined}`)
    return (
        <div>
            <StyledDate>{data.date}</StyledDate>
            <a href = {data.url}>
                <img src = {data.url}></img>
            </a>
            <br></br>
            <b>{data.title}</b>
            <br></br>
            <b>Image Credit & Copyright: {data.copyright}</b>
            <StyledExp><b> Explanation: </b>{data.explanation}</StyledExp>
        </div>
    );
}
export default Content