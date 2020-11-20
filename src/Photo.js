import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';

const Img = styled.img`
width: 30rem;
height: 30rem;
object-fit: cover;
`;

const Photo = () => {
    const [dailyPhoto , setDailyPhoto] = useState('');
    useEffect( () => {
        axios.get(`${URL}&date=${dateFormat}`)
            .then( res => {
                setDailyPhoto(res.data.url)
                return dailyPhoto
            })
            .catch(err => err);
                },[dailyPhoto])
                return (
                
                    <Img src = {dailyPhoto} alt = 'daily astronomy'></Img>
                
                
                )

}

export default Photo