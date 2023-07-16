import React from 'react';
import styled from 'styled-components';

const StyledNasaPhoto = styled.div`
    h2 {
        color: ${props => props.theme.secondaryColor};
        padding-top: 20px;
    }
    p {
        color: ${props => props.theme.black};
        padding: 15px;
   } 
`;

const NasaPhoto = (props) => {
    return (
        <StyledNasaPhoto className='nasa-photo-wrapper'>
            <h2>{props.photo.title}</h2>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} alt='The current space photo NASA has chosen for today'/>
            <p>{props.photo.explanation}</p>
        </StyledNasaPhoto>
    )
}

export default NasaPhoto;