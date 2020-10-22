import React from "react";
import Logo from "./logo.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <a href="https://www.nasa.gov/" target="_blank">
        <img src={Logo} alt="logo" />
      </a>
      <h1>Nasa Photo Of The Day</h1>
    </div>
  );
}

export default Header;
