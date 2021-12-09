//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
import React from "react";

const Photos = (props) => {
    const { info } = props;
    return (
        <div className='photo'>
            <div className='Heading'>
                <h2>{info.title}</h2>
                <h3>{info.explanation}</h3>
                <h4>{info.date}</h4>
            </div>
            <img src={info.url} />
        </div>

    )
}

export default Photos;