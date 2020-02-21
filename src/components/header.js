import React from "react";
import logo from "./img/nasaLogo.jpg";
import "../header.css";
import { Nav, NavItem, NavLink, Badge } from "reactstrap";

function Header() {
  const NavTop = () => {
    return (
      <div className="header2">
        <div className="topBar">
          <h1>
            <Badge color="primary">NASA</Badge>
          </h1>
          <img className="logoHeader" src={logo} alt="" />
        </div>
        <Nav pills className="nav-fill">
          <NavItem>
            <NavLink href="#">NASA</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">SPACE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">PROGRAM</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  };

  return (
    // <div className='headerContainer'>
    // <div className='header'>
    //   <h1>NASA</h1>
    //   <p>APOD</p>
    //   </div>
    //   <>
    //
    //   </>
    //   </div>
    <NavTop />
  );
}

export default Header;
