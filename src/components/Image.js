import React from 'react';
import styled from 'styled-components';


export default function Image({title, photo, date, details}){

    if (!photo) return <h3>Loading...</h3>;

    return(
        <StyledImage className = 'image'>
            <div className='photo-container'>
                <h2>{title}</h2>
                <img src={photo} alt='Photo of the day from NASA'/>
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
    background-Color: black;
    font-size: 20px;
    margin:5px;
    
`;

const StyledP = styled.p`
    transition: all 0.5s ease-in-out;
    padding: 0 5%;
        &:hover{
            color: #198CD7;
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;

        }
`;
