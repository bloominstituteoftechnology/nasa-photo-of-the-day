import React from "react";

const Header = props => {
    const { data } = props;
    return (
        <div>
            <h1>🪐 NASA  Astronomy Pic of the Day:</h1>
            <h2>{data.title}</h2>
        </div>
    )
}

// Contains a title and is located at the top of the page

export default Header;