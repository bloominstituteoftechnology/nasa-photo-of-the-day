import React, {useState, useEffect} from 'react';
import ApodCard from './ApodCard';
import axios from 'axios';

export default function ApodDisplay() {
    const [pod, setPod] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZwUKBPgwpfcXn99ZDah8BaLHsdzDA4djyPxwApVp`)
        .then(response => {
            console.log(response.data)
            setPod(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div className='container'>
            <ApodCard title={pod.title} url={pod.url} date={pod.date} explanation={pod.explanation} />
        </div>
    );
}