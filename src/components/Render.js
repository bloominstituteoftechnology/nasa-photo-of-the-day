import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
import Main from './Main'


const today = new Date();
console.log(today);
const dateParam = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
console.log(dateParam);
const apiKey = 'T1nb8B9a9boKrWQ9T1tx0AsUbhntIMLFlzTewDTb';


export default function Render() {
    const [nasaData, setNasaData] = useState({});
    const [date, setDate] = useState(dateParam);

    const getDataFromNasa = ((apiKey, date) => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
            .then(response => {
                setNasaData(response.data);
            })
            .catch(err => { console.log(err) });
    })


    useEffect(() => {
        getDataFromNasa(apiKey, date);
    }, [])

    console.log(nasaData);

    if (nasaData === {}){
        return(
            <div>
                <h1>LOADING...</h1>
            </div>
        )
    }

    return (
        <section>
            <Header/>
            <Main nasaData={nasaData}/>
        </section>
    )
}