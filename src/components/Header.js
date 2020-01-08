import React from "react";

export default function Header(props){

    return(
        <header>
            <h1>Astronomy Picture of the Day</h1>
            <p>{props.date}</p>
        </header>
    );
}