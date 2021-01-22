import React from "react"
import styled from "styled-components"


const Wrapper = styled.p`
    color: white;
    width: 100%;
    margin: 0px;
    text-align: justify;
    

`;

export default function Summary(props){

    const {sum} = props;

    return (
        <Wrapper>
        {sum}
        </Wrapper>
    )




}