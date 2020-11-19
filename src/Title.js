import React, { useEffect, useState } from "react";
import axios from "axios";

const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';

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
                <div>
                    <h2>{photoTitle}</h2>
                    <p>{dateFormat}</p>
                </div>
                
                )

}

export default Title 