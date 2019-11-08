import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PicCard from './PicCard';
import styled from "styled-components";


const Wrapper = styled.div`
    max-width: 800px;
    width:100%;
    height:60vh;
`;

const PicList = () => {
    const [nasaPic, setNasaPic] = useState([]);
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=XN8typFRIwztacRy1AFDd2cTogqIOQ73U2hU8eeo')
        .then(response => {
            
            setNasaPic(response.data);
            console.log(response.data);
            
        })
        .catch(error => {
            console.log('Blasted outta sight, No Data', error);
        });
    }, []);

    return (
        <Wrapper> 
                                      
                <PicCard 
                title={nasaPic.title}
                explanation={nasaPic.explanation}
                hdurl={nasaPic.hdurl}/>
                  
                       
                                   
        </Wrapper>
    )
}




export default PicList;