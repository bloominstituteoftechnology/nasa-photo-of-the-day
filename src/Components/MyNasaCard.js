import React from 'react';

const NasaCard = (props) => {
    return (
        <>
            <h1>Nasa Photo!</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt="Nasa's photo of the day"/>
        </>
    )
}
export default NasaCard;