import React, {useState, useEffect} from "react";
import "./header.css"
const Header = (props) => {
    return (
        <div className="main">
            <h1>EPIC NASA PAGE</h1>
            <nav>
                <a href="#">About</a>
                <a href="#">Api's Used</a>
                <a href="#">Contact</a>
                <a href="#">Other</a>
            </nav>
        </div>
    )
}

export default Header


//Only hard coded part of this project. 