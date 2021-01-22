import React from "react"
import styled from "styled-components"


const Wrapper = styled.p`

    width: 265px;
    margin: 0px;
    display: flex;
    

`;

export default function Summary(props){

    const {sum} = props;

    return (
        <Wrapper>
        {sum}
        </Wrapper>
    )




}