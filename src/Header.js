import React from "react";

const Header = ({ date }) => {
    return (
        <div>
            <h1>NASA Photo of the Day!</h1>
            <h2>{date}</h2>
        </div>
    )
};

export default Header; 