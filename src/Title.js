import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';


const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';

const APODTitle = styled.div`
background-color: red;

`

const Title = () => {
    const [photoTitle , setPhotoTitle] = useState('');
    useEffect( () => {
        axios.get(`${URL}&date=${dateFormat}`)
            .then( res => {
                setPhotoTitle(res.data.title)
                return photoTitle
            })
            .catch(err => err);
                },[photoTitle])
                return (
                <APODTitle>
                    <h2>{photoTitle}</h2>
                    <p>{dateFormat}</p>
                </APODTitle>
                
                )

}

export default Title 