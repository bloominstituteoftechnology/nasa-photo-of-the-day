import React from 'react';
import styled from 'styled-components';

const ImageDesign = styled.img`
width:30%;
text-align:center;
@media(max-width:1100px){
    width:70%;
}
`;

export default function Image(props){
    return (
        <div className='topImage'>

        <ImageDesign src={require('./images/nasa-logo-web-rgb.png')} alt="NasaLogo"/>

    </div>
    
    );
}