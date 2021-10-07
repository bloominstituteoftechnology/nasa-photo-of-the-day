import React from "react";
import { Fade } from "reactstrap";
import { useState } from "react";



function Header( { nasaData } ) {
    const [fadeIn, setFadeIn] = useState(false);

    return(
        <div>
        <h1>{nasaData.title}</h1>
        <h3>{nasaData.date}</h3>
        </div>
    );
}




export default Header;