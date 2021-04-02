import React from 'react'
import styled from 'styled-components'

const MainPic = styled.div `
display: flex;
justify-content: center;
box-sizing: border-box;

div {
    box-sizing: border-box;
    width:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dotted black;
}

img {
    /* width:100%; */
    box-sizing: border-box;
    max-height: 70vh;
}
p{
    width: 90%;
    /* border: 2px solid black; */
}
`



export default function(props){
    const {image} = props


    return (
    <MainPic>
        <div>
            <h1>NASA's Picture Of The Day</h1>
            <h2>{image.title}</h2>
            <img src={image.url} alt={image.title}></img>
            <p>{image.explanation}</p>
        </div>
    </MainPic>
    )
}