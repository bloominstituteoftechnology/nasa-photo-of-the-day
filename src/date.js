import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div `
    width: 75%;
    margin: auto;
`;

const H1Wrap = styled.h1 `
    font-size: 500%;
    color: white;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    display: flex;
`;



const Date = ( {date} ) => {
    return (
        <WrapperDiv>
            <H1Wrap>Today is {date} </H1Wrap>
        </WrapperDiv>
    )
};

export default Date;