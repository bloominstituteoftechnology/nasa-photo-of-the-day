import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./Info";
import styled from 'styled-components';

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
align-items: center;
padding: 4%;
background-color: rgb(193, 135, 216);
`;

const SpaceImg = styled.img`
max-width: 90%;
height: auto;
border-radius: 4px;
`


export default function PhotoCard(){
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=poabCixXn4ymsmjXAxgjv37wfeUduqaRvmfSLuX1`)
        .then(response => {
        console.log(response);
        setPhotoData(response.data);
        })
        .catch(error => {
        console.log("photo data didn't load", error);
        });

    }, []);

    return (
       
        <Card>

            <SpaceImg src = {photoData.url}/>

            <Info
            title = {photoData.title}
            date = {photoData.date}
            explanation = {photoData.explanation}
            copyright = {photoData.copyright}
            />

        </Card>

    )

}
