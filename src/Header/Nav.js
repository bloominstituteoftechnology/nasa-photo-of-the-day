import React from "react";
import "./Nav.css";
import {Link, NavBar, Date} from "../Style";


const Nav = (props) => {
    var date = props.date;
    return (
      <NavBar>
        <Date>{date}</Date>
        <div>
            <Link href="#">View Code</Link>
        </div>
      </NavBar>  
    )
}

export default Nav;