import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import ImgCard from './image-card';
import axios from 'axios';

// const astronomyImage = styled.img`
//   width: 200px;
//   height: 200px;
//   object-fit: scale;
//   flex-shrink: 2;
// `;

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const PageTitle = styled.h1 `
    color: #db6220;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 50px;
    letter-spacing: 3px;
    
`


export default function PhotoOfTheDay () {
    const [image, setImage] = useState([]);

    useEffect(() =>{
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Xhu8dMJcXuDnAK1yqXu71Z35Cf721cMkr3ZwPe9D`)
            .then(response =>{
                const nasaImage = response.data
                console.log("Nasa API data", response);
                setImage(nasaImage);
            })
            .catch(err =>{
                console.log(`Couldn't get the requested data!`, err);
            })
    }, []);
    
    return (
        <Container className = "app2">
            <PageTitle className = "page-title">Astronomy Photo of the Day</PageTitle>
            <ImgCard
            url={image.url}
            title={image.title}
            // date={image.date}
            copyright={image.copyright}
            explanation={image.explanation}
            />
        </Container>
    );
}