import React from 'react';
import styled from 'styled-components';

const NasaCard = (props) => {
    const {data} = props;

    return (
        <div>
        <Card classname='nasacard'>
        <h1>Welcome to the NASA DISPLAY CARD!</h1>
            <h2>{data.title}</h2>
            <p>{data.date}</p>
            <img src={data.url} alt={`Nasa Photo of the day for ${data.date}`} /> {/*eslint-disable-line*/}
        </Card>
        </div>
    )
}

const Card = styled.div`
css: css;
display: grid;
align-items: center;
justify-content: center;
`

export default NasaCard;