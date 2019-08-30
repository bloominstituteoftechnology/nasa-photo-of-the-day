import React from "react";
import styled from "styled-components";

function Nav() {
    const CustomNav = styled.a`
        margin: 0 15px;
        font-size: 1.7rem;
        cursor: pointer;
        color: white
    `

    const navItems = ["Home", "Blog", "About", "Programs"];
    let navigation = navItems.map((item, index) => {
        return (
            // <a key={index} style={{margin: "0 15px", fontSize: "1.7rem", cursor: "pointer", color: "white"}}>
            //     {item}
            // </a>
            <CustomNav key={index}>{item}</CustomNav>
        )
    });
    return (
        <nav style={{marginBottom: "20px"}}>
            {navigation}
        </nav>
    )
};

export default Nav;