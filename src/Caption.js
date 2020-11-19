import React, { useEffect, useState } from "react";
import axios from "axios";

const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';

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
                
                <p>{caption}</p>
                
                
                )

}

export default Caption