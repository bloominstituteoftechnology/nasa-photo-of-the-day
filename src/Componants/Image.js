
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const StyledVideo = styled.div `
display: flex;
justify-content: center;
padding: 1em .5em;
border-top-style: solid;
border-bottom-style: solid;
border-padding: 25%;

`

const StyledTextMenu = styled.div`
padding: 0 20%;
&:hover{
    background-color: black;
    color: white;

} 
`
const StyledTextBottom = styled.div`
box-sizing: content-box;
padding: 0 20%;
overflow: auto;
&:hover{
    background-color: skyblue;


} 
`


export default function Image(props) {
    const { picture } = props 
   
    if (picture.media_type === 'video') {
        return (
            <div>
                <StyledTextMenu>
                <h1> {picture.date} </h1>
                <h2> {picture.title} </h2> 
                </StyledTextMenu>

                <StyledVideo>
                <ReactPlayer url={picture.url} alt={picture.title} />
                </StyledVideo>

                <StyledTextBottom>
                <h5> {picture.explanation} </h5>
                
                </StyledTextBottom>
            </div>
        ) 
    }
    else {
        return (
        <StyledTextMenu>
        <h1> {picture.date} </h1>

        <h2> {picture.title} </h2>
    
        <img src={picture.url} alt={`${picture.title}`}/>

        <h5> {picture.explanation} </h5>

        <h3> {picture.copyright} </h3>
    </StyledTextMenu> )

    }}