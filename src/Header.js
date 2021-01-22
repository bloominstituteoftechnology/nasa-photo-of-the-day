import axios from 'axios';
import React, { useState, useEffect } from 'react';
import image from './App';
import { URL, API_KEY } from "./App";

export default function GetDate() {
    const dateToday = new Date();
    const [title, setTitle] = useState('');
    

    let date = dateToday.getFullYear() + '-' + (dateToday.getMonth()+1)
    + '-' + dateToday.getDate();

    useEffect(() => {
        axios
            .get(`${URL}${API_KEY}`)
            .then((res) => {
                setTitle(res.data.title)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []); 

    return (
        
        <h1>
            NASA™ Photo of the Day: 
            <p>{date}</p>
            <h2>{title}</h2>
        </h1>
        
        
    )
}