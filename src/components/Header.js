import React from "react";

const Header = props => {
  return (
    <div className="header-container">
        <h1>Welcome to APOD:</h1>
        <h2>Today is {props.photoDate} and the</h2>
    </div>
  );
};

export default Header;