// import React from "react";
import styled from 'styled-components';

export const Button = styled.button
    `background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    a{
        color: palevioletred;
    }

    ${props => props.primary && `
    background: palevioletred;
    color: white;
    a{
        color: white;
    }
    `}
    `;

export const Container = styled.div
    ` text-align: center;
    border: 1px solid palevioletred;
`;

export const Gallery = styled.div
    ` text-align: center;
    border: 1px solid palevioletred;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header1 = styled.h1
    `color: palevioletred;
`;

