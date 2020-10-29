import React from 'react';
import styled from 'styled-components';

const Styledh1 = styled.h1`
    font-size: 10rem;
    color: #36454f;
    margin: -3rem 0 1rem 0;
    padding: 1rem;
    border-radius: 10px;
    background: gray;
`

const Styledh2 = styled.h2`
    font-size: 3rem;
    margin-top: 0.1rem;
`

export default function Header(){
    const title = "NASA APOD";
    const subTitle = "Astrological Photo of the Day"
    
    return(
    <div>
        <Styledh1>{title}</Styledh1>
        <Styledh2>{subTitle}</Styledh2>
    </div>
    )
}