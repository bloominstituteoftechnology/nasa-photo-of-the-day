import React from "react";
import "../App.css";

function Navbar(){
    return(
        <div className ="container">
            <div className="nav">
            <h1>NASA</h1>
            <div className="nav-item">
                <a href= "#">Product</a>
                <a href= "#">About</a>
                <a href= "#">Team</a>
                <a href= "#">Contact</a>

            </div>

        </div>
        </div>
        
    )
}
export default Navbar;