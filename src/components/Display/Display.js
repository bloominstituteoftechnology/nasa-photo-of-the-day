import React from "react";
import "../../App.css";

const Display = (props) => {

    const { data } = props;

    return(
        <div className="display-container">
            <div className="display-item">
                <img alt="picture of the day" src={data.url}></img>
            </div>
            <div className="display-item"> {data.explanation} </div>
        </div>
    );
};



export default Display;