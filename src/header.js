import React from "react";

const Header = props => {
    const { photo } = props

    return (
        <div className="header">
            <h1>{photo.title}</h1>
            <h3>{photo.date}</h3>
        </div>
    )
}

export default Header;