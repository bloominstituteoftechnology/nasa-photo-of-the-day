import React, {useEffect, useState} from "react";
import axios from "axios";
import ApodCards from "./ApodCards";
import styled from 'styled-components';

const Container = styled.div
`
    width: 80%;
    margin: 0 auto;
    background: lightblue;
    padding: 40px;
    border-radius: 50px;
    border: 1px gray solid;
`

const Entry = styled.div
`

`

export default function Apod(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    const [apodData, setApodData] = useState([]);
    const [date, setDate] = useState(today);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=fZTNbJX0hI1dI2q0OfAIlj8dSPxlPPhRLYiiXgSy&date=${date}`)
        .then(response => {
            console.log(response);
            setApodData(response.data);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        })
    }, [date])


    return (
    <Container>
        <Entry>
            { <ApodCards imgUrl={apodData.url} explanation={apodData.explanation} title={apodData.title}/> }
        </Entry>
    </Container>
    )
}