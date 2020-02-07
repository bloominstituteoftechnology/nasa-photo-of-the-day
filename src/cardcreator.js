import React from 'react';

const Cardcreator = props => {
    console.log(props.data)
    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.date}</p>
            <img src = {props.data.url} alt = ""></img>
            <p>{props.data.explanation}</p>
        </div>
    );
}

export default Cardcreator;
