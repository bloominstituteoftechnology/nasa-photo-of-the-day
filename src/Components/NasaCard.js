//this the nasa card component!
//we will use this to fill out the info for display

import React from 'react';
const NasaCard = (props) => {
    const {data} = props;

    return (
        <div>
        <h1>Welcome to the NASA DISPLAY CARD!</h1>
            <h2>{data.title}</h2>
            <p>{data.date}</p>
            <img src={data.url} alt={`Nasa Photo of the day for ${data.date}`} />
        </div>
    )
}

export default NasaCard;