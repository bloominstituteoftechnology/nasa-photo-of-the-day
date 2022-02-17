import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constants'
import style,{keyframes} from 'styled-components';

const TitleStyle = style.div`
    color:${pr=>pr.theme.secondaryColor};
    font-family: 'Shadows Into Light', cursive;
    font-size: 2rem;
    font-variant:small-caps;
    padding:20px;
    display:flex;
    flex-wrap:no-wrap;
    justify-content:center;
`;
const H1Style = style.h1`
    // background-color:${pr=>pr.theme.primaryColor};
    
    width:75%;
    
`;
export default function Title(props){
    const{photos}=props;
    return <TitleStyle>
        <H1Style>{photos.title}</H1Style>
    </TitleStyle>
}