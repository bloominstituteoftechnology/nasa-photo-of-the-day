import React from 'react';
import Title from './Title';
import NasaPic from './NasaPic';
import PicInfo from './PicInfo';
import styled from 'styled-components'

const WrapperDiv = styled.div`
display: flex;
justify-content: center;
`;

const CardDiv = styled.div`
background-color: white;
width: 700px;
height: 700px; 
box-shadow: 20px 20px 7px; 
border: solid grey; 
margin-top: 100px;
&:hover {
    box-shadow: none
}
`;

function NasaCard(props) {
    return (
    <WrapperDiv>
        <CardDiv>
            <Title spaceData={props.spaceData} />
            <NasaPic spaceData={props.spaceData} />
            <PicInfo spaceData={props.spaceData} />
        </CardDiv>
    </WrapperDiv>
        
    )
}

export default NasaCard;