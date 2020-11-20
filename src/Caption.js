import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';

const Info = styled.p`
    margin: auto 3rem;
    text-align: justify;
    text-justify: auto;
`;

const Caption = () => {
    const [caption , setCaption] = useState('');
    useEffect( () => {
        axios.get(`${URL}&date=${dateFormat}`)
            .then( res => {
                setCaption(res.data.explanation)
                return caption
            })
            .catch(err => err);
                },[caption])
                return (
                
                <Info>{caption}</Info>
                
                
                )

}

export default Caption