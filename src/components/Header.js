import React from "react";

const Header = props => {
    const { data } = props
    // console.log('title', data.title)
    return (
        <div>
            <h1>NASA  Astronomy Picture of the Day:</h1>
            <h2>{data.title}</h2>
        </div>
    )
}

// Contains a title and is located at the top of the page

export default Header;