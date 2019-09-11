import React from "react";

const Apod = props =>{
    return (
        <div className="wrapper">
            <div className="display-header">
                <h1>NASA Picture of the Day</h1>
            </div>
            <div className="display-body">
                <img src={props.imgUrl} />
            </div>
            <div className="display-description">
                <h2>NASA APOD IMAGE NAME</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Apod;