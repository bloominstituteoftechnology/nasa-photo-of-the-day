import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div `
    width: 75%;
    height: auto;
    margin: auto;
`;

const H2Wrap = styled.h2 `
    font-size: 2rem;
    color: white;
    padding-left: 5%;
    padding-right: 1%;
    padding-bottom: 1%;
    margin: auto;
`;



const Explanation = ( {explanation} ) => {
    return (
        <WrapperDiv>
            <H2Wrap>{explanation}</H2Wrap>
        </WrapperDiv>
    )
};

export default Explanation;