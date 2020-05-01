import React from "react";

const Planet =(props) => {
    return (
        <div>
            <div> {props.description} </div>
            <img src={props.img} alt="Earth Image"></img>
        </div>
    );
}

export default Planet;
