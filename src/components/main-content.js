import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants/constantsIndex';
import styled from 'styled-components';

const StyledMainContent = styled.div`
    width: 118.7rem;
    height: 60rem;
    display: flex;
    border: 2px solid black;
    margin-top: 5rem;
    background-color: black;
    position: relative;
`

const StyledContent = styled.div`
display: flex;

img {
    height: 65%;
    position: absoulute;
    margin-top: 12rem;
    margin-left: 70rem;
    border: 2px solid purple;
}

    h1 {
        width: 50%;
        height: 5%;
        position: absolute;
        margin-top: 5rem;
        margin-left: 32.5rem;
        color: red;
        font-size: 3rem;
    }

    h4 {
        width: 55%;
        position: absolute;
        margin-top: 22.2rem;
        margin-left: 3rem;
        font-size: 1.5rem;
        color:white;
    }

    h5 {
        position: absolute;
        margin-left: 90.5rem;
        margin-top: 51.4rem;
        font-size: .9rem;
        color: white;
    }

    h6 {
        width: 7%;
        position: absolute;
        font-size: 1rem;
        color: white;
        margin-left: 82rem;
        margin-top: 51.3rem;

    }
`

export default function MainContent(props) {
    const [details, setDetails] = useState([])

useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
        console.log(res.data);
        setDetails(res.data)
    }).catch(err => {
        console.log(err);
    })
},[])

return (
    <StyledMainContent>
        <StyledContent>
            <h4>{details.explanation}</h4>
            <h5>{details.date}</h5>
            <img className='main-image'src={details.url} alt='https://api.nasa.gov/planetary/apod?api_key=Lz5GYCNcSITHrvzhFNWk88bVLBaufh2quaqEyOZy'></img>
            <h1 className='title'>{details.title}</h1>
            <h6 className='copyright'>{details.copyright}</h6>
        </StyledContent>
    </StyledMainContent>
)
}

