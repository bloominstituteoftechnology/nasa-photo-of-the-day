import React, { useState, useEffect } from "react";
import './Card.css';
import axios from 'axios';
import CardData from './CardData';

function Card() {
    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=sYuUG0LclwUSXORXXGAjgbRG6Ls7iZ8q8buyFEyT')
            .then(response => {
                console.log('response from Card', response);
                setNasaData(response.data);
            })
            .catch(error => console.log('you goofed', error));
    }, []);

        return (
        <div className='card-container'>
            <h2>{nasaData.title}</h2>
            <p>Copyright: {nasaData.copyright}</p>
            <div className="card-flex-container">
                <div className="photo-container">
                    <img className='daily-photo' src={nasaData.hdurl} alt="Daily nasa shot"></img>
                </div>
                
                <CardData data={nasaData} />
               
            </div>
           
        </div>
    );
}

export default Card;