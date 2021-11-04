import React, { useState, useEffect} from "react";
import Footer from "./Footer.js";
import style from "./NavBar.css";



const NavBar = (props) => {
    return (
        <div className="topMenu">
            <Footer menuItems={props.menuItems} />

        </div>

    )
}

export default NavBar;