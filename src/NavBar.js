import React from "react";

const NavBar = (props) => {
    return (
        <nav>
            <p>
                Nasa Photo Of The Day: {props.photoTitle}
            </p>
        </nav>
    )
}

export default NavBar