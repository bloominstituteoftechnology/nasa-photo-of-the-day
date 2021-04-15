import React from 'react';
import styled from 'styled-components';

// Styles for images
const Image = styled.div`
    // border: 2px solid purple;
    width:45%;
`

export default function Pictures(props){
    const {pictures} = props;
    return (
        <Image>
            <img src = {pictures} />
        </Image>
    )
}