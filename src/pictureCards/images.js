import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PicCard from './cardContainer';

export default function ImageList() {
    const [card, setCard]= useState([])

    useEffect(() =>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response =>{
            console.log('apod response', response.data);
            setCard(response.data)
            console.log(card)

        })
        .catch(err => {
            console.log('axios error', err)
        })
    }, []);
    return <div className= 'pictureCard'>
            
                <PicCard 
                src = {card.hdurl}
                discription = {card.explanation}
                date = {card.date} 
                copy = {card.copyright}
                />
            



    </div>
}

