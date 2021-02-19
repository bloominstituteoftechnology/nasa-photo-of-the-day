import React from 'react';
import styled from 'styled-components';

const ImageDesign = styled.img`
width:20%;
text-align:center;
`;

export default function Image(props){
    return (
        <div className='topImage'>

        <ImageDesign src={require('./images/nasa-logo-web-rgb.png')} alt="NasaLogo"/>

    </div>
    
    );
}