import React from 'react';
import Header from './Header';
import Image from './Image';
import Caption from './Caption';
import styled from 'styled-components';

const StyledOuterContainer = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`
const StyledContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    color: ${props => props.theme.primaryColor};
    text-align: center;
    background-color: ${props => props.theme.containerColor};
    margin: 2% 0 5% 0;
    box-shadow: 5px 5px 10px;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    border-radius: 3%;

    img{
    max-width: 100%;
    border-top-right-radius: 3%;
    border-top-left-radius: 3%;
    }
`

const Card = props => {
    const { data } = props;
    return (
        <StyledOuterContainer>
            <StyledContainer>
                <Image data={data}/>
                <Header data={data}/>
                <Caption data={data}/>
            </StyledContainer>
        </StyledOuterContainer>
    )
}

export default Card;