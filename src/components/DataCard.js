import React from 'react';
import styled from "styled-components";

const ApodCard = styled.div`
    max-width: 400px;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    padding: 20px;
    margin: 10px 20px;
`;

const ApodImg = styled.img`
    width: 100%
    height: 40%;
    object-fit: cover;
`;


const DataCard = props => {
    return (
        <ApodCard key={props.id}>
            <h2>{props.title}</h2>
            <ApodImg src={props.imageUrl} alt='nasa daily space image'/>
            <p>{props.description}</p>
            <p>{props.copyright}</p>
         </ApodCard>
    );
};

export default DataCard;