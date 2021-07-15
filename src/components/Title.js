import React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.h2`
    font-size: 35px;
    margin: 0% 25%;
    padding-top: 35px;
    padding-bottom: 0px;
    padding-right: 50px;
    padding-left: 50px;
    /* border-radius: 25px; */
    color: white;
    background-color: darkgray;
`

export default function Title({title}){
    return <StyledHeader>{title}</StyledHeader>;
}