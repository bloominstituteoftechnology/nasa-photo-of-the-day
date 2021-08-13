import React from 'react';
import styled from 'styled-components';

const ImgTitle = styled.h2`
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: purple;
`

export default function Title({title}) {
    return <ImgTitle>{title}</ImgTitle>
}