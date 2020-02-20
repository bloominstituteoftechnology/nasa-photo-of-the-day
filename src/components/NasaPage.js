import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import Axios from "axios";

let NasaPage = () =>{
    let [data, setData] = useState([])

    useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=CvVuCSzzIfXhBUwfrhe6lrL1wwtaScU3EqWNuKXs')
        .then(res =>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log('no data found', err)
        })
    }, []);
    return (
        <div className='body-container'>
            <h1 className='today-date'>{data.date}</h1>
            <h1>Nasa's Photo of the Day</h1>
            <NasaCard
            nasaData = {data}
            />
        </div>
    );
}

export default NasaPage;