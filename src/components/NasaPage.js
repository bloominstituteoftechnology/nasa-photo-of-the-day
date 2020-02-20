import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import Axios from "axios";

let NasaPage = () =>{
    let [data, setData] = useState([])

    useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=CvVuCSzzIfXhBUwfrhe6lrL1wwtaScU3EqWNuKXs')
        .then(res =>{
            console.log(res)
        })
        .catch(err => {
            console.log('no data found', err)
        })
    }, []);
    return (
        <div className='body-container'>
            <h1>Title goes here</h1>
            <NasaCard
            
            />
        </div>
    );
}

export default NasaPage;