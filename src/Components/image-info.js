import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';


function ImageContainer() {
    const [ImgDate, setImgDate] = useState('');
    const [ImgTitle, setImgTitle] = useState('');
    const [Explanation, setExplanation] = useState('');

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=BZR4pKnRyIJnc6h8hTbL9z45MturqMMxyGLA7ovR`)
        .then(res => setImgDate(res.data.date))
        .catch(err => console.log(err));
    })

    const apodDate = styled.p`
        text-align: left;
    `;

    return (
        <div className='img-info'>
            <apodDate>{ImgDate}</apodDate>
        </div>
    );
}
export default ImageContainer;