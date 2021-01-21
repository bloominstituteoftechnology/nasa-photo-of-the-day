import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL, API_KEY } from './App';

export default function GetDescription() {

    const [details, setDetails] = useState('');

    useEffect(() => {
        axios
            .get(`${URL}${API_KEY}`)
            .then((res) => {
                setDetails(res.data.explanation)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <p>{details}</p>
    )
}