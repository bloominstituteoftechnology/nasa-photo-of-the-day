import React from "react";

function Nav() {
    const navItems = ["Home", "Blog", "About", "Programs"];
    let navigation = navItems.map((item, index) => {
        return (
            <a key={index} style={{margin: "0 15px", fontSize: "1.7rem", cursor: "pointer", color: "white"}}>
                {item}
            </a>
        )
    });
    return (
        <nav style={{marginBottom: "20px"}}>
            {navigation}
        </nav>
    )
};

export default Nav;