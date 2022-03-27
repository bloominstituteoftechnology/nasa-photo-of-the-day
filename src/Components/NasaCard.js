import React from 'react';
import styled from 'styled-components';

const NasaCard = (props) => {
    const {data} = props;

    return (
        <div>
        <Card classname='nasacard'>
        <h1>Welcome to the NASA DISPLAY CARD!</h1>
            
            <Img src={data.url} alt={`Nasa Photo of the day for ${data.date}`} /> {/*eslint-disable-line*/}

            <h2>{data.title}</h2>
            <p>{data.date}</p>
        </Card>
        </div>
    )
}

const Card = styled.div`
display: grid;
align-items: center;
justify-content: center;
`
const Img = styled.img`
height: 200px;
width: 250px;
`

export default NasaCard;