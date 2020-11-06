import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY, ALT_URL } from '../constants';
import ImageMaker from '../components/ImageMaker'



function ImageDisplay () {

    const [ date, setDate ] = useState('')
    const [ randomImage, setRandomImage ] = useState('') //const to hold state for current or previous images.
    
    console.log(randomImage);
    useEffect(() => {
        axios
        .get(`${BASE_URL}${API_KEY}`)
        .then( res => {
            console.log(res.data)
            setRandomImage(res.data)
            setDate(res.data.date)
        })
        .catch (err => {
        })
    }, []) //empty array ensures this side effect is only run once.

    // useEffect(() => {
    //     axios
    //     .get(`${ALT_URL}/2020-03-14/${API_KEY}`) //add random date generator property
    //     .then( res => {
    //         setRandomImage(res.data.hdurl)
    //         // setNasaImage(res.data.hdurl)
    //     })
    //     .catch( err => {     
    //     })
    // }, [])

    return (
        <div>
            <h1>NASA Rando PIC</h1>
            <button>Time Travel</button>  {/*display random image. */}
            <button>Today Travel</button> {/*display today's image. */}
            <ImageMaker astroImage={randomImage.hdurl} />
            <h2>{randomImage && randomImage.title}</h2>
            <h2>{randomImage && randomImage.date}</h2>
            <p>{randomImage && randomImage.explanation}</p>
        </div>
    )
}
export default ImageDisplay;