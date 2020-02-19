import React from "react";

const Image = props => {
    return (
        <div className="image-container">
            <img className="nasa-pic" src={props.imgUrl} alt="current one of the day"/>
        </div>
    );
};

export default Image;