import React from "react";

const Body = (props) => {
    return(
        <div className="image">
            <img src={props.picture.hdurl} alt="space pic"/>
        </div>

    );
};

export default Body;