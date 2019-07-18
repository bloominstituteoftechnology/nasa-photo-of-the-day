import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 75%;
    heigh: auto;
    background-color: tomato;
    margin: auto;
`;

const H2Wrap = styled.h2`
    font-size: 100%;
    color: white;
    padding-left: 5%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
`;





const Explanation = ({xplain})=>{
    return(
        <WrapperDiv>
            <H2Wrap>{xplain}</H2Wrap>
        </WrapperDiv>
    )
}

export default Explanation;