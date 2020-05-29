import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardData from './CardData';
import styled from 'styled-components';

const CardContainer = styled.div` 
    max-width: 1200px;
    padding: 2%;
`;
const CardFlexContainer = styled.div` 
    display:flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;
const DailyPhoto = styled.img` 
    display:block;
    max-width: 80%;
    height: auto;
    margin: 0 auto;
`;
const InfoHeader = styled.div` 
    background-color: #0A418E;
    color:white;
    padding: 15px 0px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 2%;
`;

const PhotoContainer = styled.div` 
    max-width: 750px;
`;

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
        <CardContainer>

                <InfoHeader>
                    <h2>{nasaData.title}</h2>
                </InfoHeader>

                <CardFlexContainer>

                    <PhotoContainer>
                        <DailyPhoto src={nasaData.hdurl} alt="Daily nasa shot"></DailyPhoto>
                    </PhotoContainer>
                    <CardData data={nasaData} />

                </CardFlexContainer>
           
        </CardContainer>
    );
}

export default Card;