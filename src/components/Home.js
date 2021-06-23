import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const TakePic = styled.a`
font-size: 3rem;
justify-content: center;
padding: 10px;
`

export default function Home (){
    return (
        <TakePic>
            <Link to="/nasaphoto"> Picture of the day!</Link>
        </TakePic>
    );
}