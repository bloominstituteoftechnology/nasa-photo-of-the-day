import React from "react";


const Components = (props) => {
    console.log(props)
    return (
        <section>
        <h2>{props.data.title}</h2>
        <img src={props.data.url} alt={props.data.title} />
        <p>{props.data.explanation}</p>
        </section>
    );
}

export default Components;