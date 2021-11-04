import React, { useEffect, useState} from 'react';
import PodData from './PodData';
import axios from 'axios';


function Pod() {
    const[podList, setPodList] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=VivAhNalbXGkj707tqxVNaVJ6v1p5LPCqXs7kLYy')
        .then(res => {
            
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
        
        />
    </div>
)

};

export default Pod;