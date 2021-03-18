import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: black;

    h1{
        color: white;
        background-color: black;

        &:hover{
            transform: scale(2);
            transition: all .05s ease-in-out;
            background-color: green;

        };
        transition: all 2s ease-in-out;
    }
    img{
        &:hover{
            transform:scale(1.5);
            transition: all 5s ease-in-out;
        }
        transition: all .05s ease-in-out;
    }
    b{
        color:white;
    }
    transition: all 2s ease-in-out;
`

const Container = props => {
    const {data} = props;
    console.log(data)
    return (
        <StyledContainer>
            <h1>{data.date}</h1>
            <a href = {data.url}>
                <img src = {data.url}></img>
            </a>
            <br></br>
            <h2>{data.title}</h2>
            <br></br>
            <b>Image Credit & Copyright: {data.copyright}</b>
            <br></br>
            <b><p>Explanation: {data.explanation}</p></b>
        </StyledContainer>
    )
}


export default Container