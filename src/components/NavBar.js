import React from "react";
import "./NavBar.css";

const NavBar = props => {
    console.log("NavBar", props);
    return (
        <div className="nav">
            <div className="shuttle-wrapper">
                <i className="fas fa-space-shuttle" />
            </div>
            <div className="title">
                <h1>Astronomy Picture of the Day</h1>
            </div>
            <div className="todays-date">
                <h3>{props.date}</h3>
            </div>
        </div>
    );
};

export default NavBar;
