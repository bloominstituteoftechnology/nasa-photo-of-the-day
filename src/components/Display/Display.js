import React from "react";
import "../../App.css";

const Display = (props) => {

    const { data } = props;

    return(
        <div className="container">
            <div>
                <img alt="picture of the day"></img>
            </div>
            <div> Explanation </div>
        </div>
    );
};



export default Display;