import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../constants';

export default function Picture(props){
    const [pic, setPic] = useState()

    useEffect (() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(resp => {
            console.log(resp.data)
            setPic(resp.data);
        })
    })

    return (
        <div>
           {pic &&  <img src= {pic.url} alt ='Nasa Astonomy Picture of the Day'></img>}
        </div>
    )
}