import React, { useState, useEffect } from "react"
import axios from 'axios'



export default function PhotoImport() {
    
const [copyright, setCopyright] = useState(null);
const [date, setDate] = useState(null);
const [explain, setExplain] = useState(null);
const [title, setTitle] = useState(null);
const [url, setUrl] = useState(null);

    
useEffect( () => {
    axios   
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(success => {
            setCopyright(success.data.copyright);
            setDate(success.data.date);
            setExplain(success.data.explanation);
            setTitle(success.data.title);
            setUrl(success.data.url);
        })

        .catch(fail => console.log('get fail', fail));

    },[])


    return (
        


        <div className = 'photo-info'>
            <h1>Welcome to the NASA Photo of the day 🚀 [{date}]</h1>
            <h3>Title: "{title}" by {copyright}</h3>
            <img src= {url} />
            <h3>Description:</h3>
            <p>{explain}</p>

            </div>

        
        )

    }