import React from "react";

const NasaCard = (props) => {
    return (
        <>
            <h1>Daily Nasa Photo</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt='Nasa photo of the day' />
            <footer>This is my footer section</footer>
        </>
    )
}

export default NasaCard;