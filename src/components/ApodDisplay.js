import React, {useState, useEffect} from 'react';
import ApodCard from './ApodCard';
import axios from 'axios';

export default function ApodDisplay() {

    const [pod, setPod] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DJqcc2QfRAfP8FktB7mpqLcdtPig9ij7BUd2CRr6')
        .then(response => {
            console.log(response.data)
            setPod(response.data)
        }).catch(error => {
            console.log("The requested image was not returned", error)
        })
    }, [])
    
    return (
        <div className='apod-container'>
            <ApodCard
            url ={pod.url}
            title={pod.title}
            date={pod.date}
            desc={pod.explanation}
            />
        </div>
    )
}
