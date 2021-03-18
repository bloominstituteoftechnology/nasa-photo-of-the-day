// You do not need to change any code in this file for MVP
import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="search-bar-wrapper">
        <img src="https://www.clipartkey.com/mpngs/m/69-696777_nasa-worm-logo-png.png" alt="NASA logo"></img>
        <form className="search-form">
            <input
            type="text"
            placeholder="Search"
            />
        </form>
        <div className="social-wrapper">
            <div className="social">
                <button>One</button>
            </div>
            <div className="social">
                <button>Two</button>
            </div>
            <div className="social">
                <button>Three</button>
            </div>
            <div className="social">
                <button>Four</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
