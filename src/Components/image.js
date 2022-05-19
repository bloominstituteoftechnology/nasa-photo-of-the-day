import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Image = props =>{
    const {image} = props;
    
    const CustomImg = styled.img`
        border-radius: 2.5vw;
        max-width: 70%;
        box-sizing: border-box;
        border: solid .5vw white;
        border-bottom: none;
        border-top: none;
        margin-bottom: 0vh;
        transition: .2s;

        &:hover {
            transition: .2s;
            max-width: 85%;
        }
    `;

    return(
        <a href={image} target="_blank">
            <CustomImg src={image} />
        </a>
    )
}

export default Image;