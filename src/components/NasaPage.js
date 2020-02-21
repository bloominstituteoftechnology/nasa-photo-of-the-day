import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import Axios from "axios";
import { Container } from 'reactstrap';
import styled from "styled-components";

let BodyContainer = styled.div`
display: flex;
flex-direction: column;
align-self: center;
width: 100%;
`;

let NasaPage = () =>{
    let [data, setData] = useState([])

    useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=CvVuCSzzIfXhBUwfrhe6lrL1wwtaScU3EqWNuKXs')
        .then(res =>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log('no data found', err)
        })
    }, []);
    return (
        <BodyContainer>
            <NasaCard
            nasaData = {data}
            />
        </BodyContainer>
    );
}

export default NasaPage;