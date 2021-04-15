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
    transition: all 2s ease-in-out;
`

export default function Container(props) {
    const {data} = props

    if (!data) return <h3>Loading...</h3>;
    return(
        <StyledContainer>
        {console.log(data)}
            <a href={data.url}>
            <img src={data.url}></img></a>
            <h4>{data.title}</h4>
            <p><b>Image Credit & Copyright: </b> 
            <a href="https://www.utkrashmishraastrophotography.com/">{data.copyright}</a></p>
            <p><b>Explanation: </b>{data.explanation}</p>
        </StyledContainer>
    )
}