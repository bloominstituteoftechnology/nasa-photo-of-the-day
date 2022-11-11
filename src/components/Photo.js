import React from "react";
import styled from 'styled-components'


const StyledWrapper = styled.div`
    background-color: ${pr => pr.theme.primary};
    margin: 2%;
    align-items: center;
    border: groove 0.2rem #a9a9ab;

    h2, h3 {
        background-color: ${pr => pr.theme.primary};
    }

    h2 {
        font-style: bold;
        font-family: 'Anybody', cursive;
    }

    h3 {
        font-style: italic;
    }

    img {
        max-width: 40%;
        // object-fit: cover;
        border: ridge 0.2rem;
    }

    .content {
        margin: 3%;
        display: flex;
        flex-direction: row;
        background-color: ${pr => pr.theme.primary};
    }

    .content p {
        padding: 2%;
        width: 50%;
        margin: 5%;
        border: thick double black;
        background-color: ${pr=> pr.theme.secondary};
        color: white;
        font-family: 'Exo 2', sans-serif;
    }
`;


const Photo = (props) => {
    return(
        <StyledWrapper>
            <h2>{props.photo.title}</h2>
            <h3>{props.photo.copyright}</h3>
            <div className="content">
                <img src={props.photo.hdurl} alt={props.photo.title}/>
                <p>{props.photo.explanation}</p>
            </div>            
        </StyledWrapper>
    )
}

export default Photo