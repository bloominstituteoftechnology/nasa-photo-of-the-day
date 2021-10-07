import React from 'react';
import styled from 'styled-components';

const TitleCard = styled.div `
    font-family: 'Birthstone', cursive;
    color: #800080;
    background-color: #c2c2c2;
    border: 2rem dashed #ba55d3;
    width: 80%;
    margin: 0 auto;
    padding 2rem;
`;

function Title(props) {
    console.log(props)

    if(!props.title) return <h3>Loading...</h3>;

    return (
        <TitleCard>
            <h1>Nasa Photo of the Day</h1>
            <h2>{props.titleCard}</h2>
            <p><span>copyright</span>{props.copyright}</p>
        </TitleCard>
    )
}

export default Title;