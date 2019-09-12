import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from "styled-components";


const EarthDiv =styled.div`
    width: 500px;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    margin: 20px;   
`;

const EarthImg = styled.img`
    width: 100%
    height: 500px;
    object-fit: cover;
`;

const EarthCard = props => {
    return (
        <EarthDiv>
            <h2>It's Earth!</h2>
            <p>Can you guess what you're looking at?</p>
            <EarthImg src={props.imageUrl} alt='nasa earth pic from satellite'/>
            <p>{props.date}</p>
        </EarthDiv>
    );
};



function EarthPic(){
    const [earthSatPic, setEarthPic] = useState([]);

    useEffect(()=> {
        axios
        .get(`https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=vM8Vqe00mUa1fFhACqp6NCcTghOHA59JAewEskSs`).then(response=> {
            const earthSatPic = response.data;
            console.log('Earth Pic Data: ', earthSatPic);
            setEarthPic(earthSatPic);
        });
    }, []);

    return (
        <EarthCard 
        imageUrl = {earthSatPic.url}
        date = {earthSatPic.date}
        />
    );
}

export default EarthPic;