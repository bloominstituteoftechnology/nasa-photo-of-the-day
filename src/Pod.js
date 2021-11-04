import React, { useEffect, useState} from 'react';
import PodData from './PodData';
import axios from 'axios';


function Pod() {
    const[podList, setPodList] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=VivAhNalbXGkj707tqxVNaVJ6v1p5LPCqXs7kLYy')
        .then(res => {
            console.log(res.data);
            setPodList(res.data);
        })
        .catch(error => {
            console.error(error)
        })
    }, []);
    


return (
    <div className = 'card'>
        <PodData key = {podList.data}
        title = {podList.title}
        date ={podList.date}
        explanation = {podList.explanation}
        Img = {podList.url}
        version = {podList.service_version}
        media = {podList.media_type}
        url = {podList.hdurl}
        
        />
    </div>
)

};

export default Pod;