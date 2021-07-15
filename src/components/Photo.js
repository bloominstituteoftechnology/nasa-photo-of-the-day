import React from 'react';
import styled from "styled-components";


export default function Photo({photo}) {
    const StyledCard = styled.div`
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin: 1rem auto;
        border: dotted gray 3px;
        border-radius: 1rem;
        font-size: 1rem;
        h2 {
            font-weight: 600;
        }
        p {
            color: gray;
            padding: 1rem;
        }
    `

    return photo ? (
        <StyledCard className="photo-card">
            <h2>{photo.title}</h2>
            <h3>{photo.date}</h3>
            {photo.url.includes("youtube") ? (
            <embed src={photo.url}></embed>) : <img src={photo.url} />}
            <p>{photo.explanation}</p>
        </StyledCard>
    ) : <h3>Loading...</h3>
}
