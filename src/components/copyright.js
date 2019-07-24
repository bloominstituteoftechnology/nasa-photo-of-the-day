import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 75%;
    margin: auto;
`;

const H1Wrap = styled.h1`
    text-align: left;
    font-size: 1rem;
    color: #8B795E;
    padding-left: 45%;
    padding-top: 1%;
    padding-bottom: 1%;
`;


const Copyright = ({cr})=>{
    return(

        (cr === undefined ? 
        <WrapperDiv>
            <H1Wrap> Copyright: NASA</H1Wrap>
        </WrapperDiv> : 
        <WrapperDiv>
            <H1Wrap> Copyright: {cr}</H1Wrap>
        </WrapperDiv>
    )
    )
}

export default Copyright;