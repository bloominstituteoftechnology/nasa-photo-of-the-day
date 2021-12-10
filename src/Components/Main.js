import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    padding: 4%;
    background-color: grey;
    font-size: 1.3rem;
    p {
        padding: 10% 4% 4%;
        border-top: 2px solid red;
    }
    span {
        background-color: white;
        font-style: italic;
    }
`

function Main(props) {
    const { nasaImg, nasaExp, nasaCopyright } = props;
    return (
        <MainDiv>
            <img src={nasaImg} width= '100%' alt="Nasa Photo of the Day"/>
            <p>{nasaExp}</p> 
            <span>{nasaCopyright}</span>
        </MainDiv>
    )
}

export default Main;