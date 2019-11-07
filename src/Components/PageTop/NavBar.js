import React from "react";

function NavLinks() {
    return (
        <div className= "App-header">
            <div className= "App-logo">
                <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt='nasa'/>
            </div>
            <div className = "links">
                <nav >
                    <a href="https://www.nasa.gov/">Home</a>
                    <a href="https://api.nasa.gov/#apod">APIs</a>
                </nav>
            </div>
        </div>
    )
}

export default NavLinks;
