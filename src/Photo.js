import React, { useEffect, useState } from "react";
import axios from "axios";

const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';

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
                
                    <img src = {dailyPhoto} alt = 'daily astronomy'></img>
                
                
                )

}

export default Photo