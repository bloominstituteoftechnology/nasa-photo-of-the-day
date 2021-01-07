import React from 'react';
import styled from 'styled-components';


export default function Image({title, photo, date, details}){

    if (!photo) return <h3>Loading...</h3>;

    return(
        <StyledImage className = 'image'>
            <div className='photo-container'>
                <h2>{title}</h2>
                <img src={photo} alt='APOD'/>
            </div>
            <div className='photo-details'>
                <StyledP>{date}</StyledP>
                <StyledP>{details}</StyledP>
            </div>
        </StyledImage>

    )
}

//styled component
const StyledImage = styled.div`
    color: white;
    background-Color: #003366;
    font-size: 20px;
    margin:5px;
    
`;

const StyledP = styled.p`
    transition: all 0.5s ease-in-out;
    padding: 2rem 5%;
`;