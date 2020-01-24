import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./photo";
import PhotoTitle from "./photoTitle";
import PhotoDate from "./photoDate";
import PhotoDesc from "./photoDesc";
import styled from "styled-components";

const APODContainer = styled.div`
max-width: 1080px;
margin: 0 auto;
`;


export default function ContainerCard () {



const leadingZero = num => num < 10 ? '0' + num : num;
const formatDate = d => {
    return d.getFullYear() + '-' + leadingZero(d.getMonth()+1) + '-' + leadingZero(d.getDate());
}
const changeDate = () => {
    const year = Math.floor(Math.random() * 29) + 1990;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    fetchData(year + '-' + leadingZero(month) + '-' + leadingZero(day));
}
const fetchData = date => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=ietbMUrbmQZsTwOPejf1okcsyd98SN08yynF6Vlw&date="+date)
    .then(response => {
    
    console.log(`Axios.get.then: `, response.data);
    setPhoto(response.data);
    })

    .catch(error => {
    console.log(`Fail, why`, error);
    });
}
const[photo, setPhoto] = useState([]);
const date = formatDate(new Date());

useEffect(() => {
fetchData(date)
}, []);

return (

    <APODContainer>
    <Photo url={photo.url} />
    <PhotoTitle title={photo.title} />
    <PhotoDate date={photo.date} changeDate={changeDate}/>
    <PhotoDesc description={photo.explanation} />
    </APODContainer>
);
}