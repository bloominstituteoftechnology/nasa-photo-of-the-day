import React from "react";

function AppCard(props){
    return(
        <>
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
            <img src={props.PotD}/>
            <p>{props.desc}</p>
        </>
    )
}

export default AppCard