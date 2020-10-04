import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
    return (
            <div>
            <Nav className = "navbar">
            <NavItem>
            <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">News</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Contact</NavLink>
            </NavItem>
            <NavItem>
            <NavLink disabled href="#">About</NavLink>
            </NavItem>
            </Nav>
            </div>
    )
}

export default Footer




        // <div>
        //     <nav className = "navbar">
        //         <li><a href="default.asp">Home</a></li>
        //         <li><a href="news.asp">News</a></li>
        //         <li><a href="contact.asp">Contact</a></li>
        //         <li><a href="about.asp">About</a></li>
        //     </nav>
        // </div>