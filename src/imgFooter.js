import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL, API_KEY } from './App';

export default function GetDescription() {

    const [details, setDetails] = useState('');
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        axios
            .get(`${URL}${API_KEY}`)
            .then((res) => {
                setDetails(res.data.explanation)
            })
            .catch((err) => console.log(err));
    }, []);

    
    return (
        <>
            <p>{likes}</p>
            <button onClick={e => setLikes(likes + 1)}>Like</button>
            <p>{details}</p>
        </>
    )
}