import React from "react";

const Apod = props =>{

    const {title, date, description, url, copyright} = props;
    console.log(props);

    return (
        <div className="wrapper">
            <div className="display-header">
                <h1>NASA Astronomy Picture of the Day {date}</h1>
                <h2>{title}</h2>
            </div>
            <div className="display-body">
                <img src={url} alt={title}/>
            </div>
            <div className="display-description">
                <h3>Picture provided by {copyright}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Apod;