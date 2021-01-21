import React from "react";
import "../../App.css";

const Display = (props) => {

    const { data } = props;

    return(
        <div className="container">
            <div>
                <img alt="picture of the day" src={data.url}></img>
            </div>
            <div> {data.explanation} </div>
        </div>
    );
};



export default Display;