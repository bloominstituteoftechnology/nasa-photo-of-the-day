import React from "react";
import "../App.css";

function Apod(props) {
    if (!props.apod) return <h3>Loading...</h3>;
    

    return (
    <div>
        <img src={props.apod}></img>
    </div>
    );
}
    export default Apod;




