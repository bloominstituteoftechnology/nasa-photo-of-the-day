import React from "react";

const Header = props => {
    return (
        <div className="header-container">
            <h1 className="headerText">{props.title}</h1>
            <h1 className="headerText">{props.date}</h1>
        </div>
    );
};

export default Header;