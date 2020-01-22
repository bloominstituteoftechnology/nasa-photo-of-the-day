import React from "react";

function Body(props) {
    return(
        <div className="image">
            <img src={props.picture.hdurl} alt="space pic"/>
        </div>

    );
};

export default Body;