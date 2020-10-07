import React, { useState, useEffect } from "react";
import axios from 'axios'

import NasaCard from "../components/NasaCard";


function Data(props) {
    const [nasaInfo, setNasaInfo] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=K3sHNgJzsB3jrEvkYuKTc6CsT5JNFFaEkYPbxmnc')
            .then(res => {
                console.log('Res data :', res)
                setNasaInfo.apply(res.data)
            })
            .catch(err => {
                console.log('YOU MESSED UP!')
            })
    }, [])
    
    return (
        <div className='dataContainer'>
        <NasaCard dat = {nasaInfo} />
    </div>
)


export default Data;