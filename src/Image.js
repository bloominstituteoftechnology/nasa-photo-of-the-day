import React from "react";
import "./App.css";
import styled from 'styled-components';

const ImageStyle = styled.img`
    border-radius: 10px;
`;

export default function Image (props) {
    
    const { src, alt } = props;

    return (
        <ImageStyle src={src} alt={alt} />
    )
};