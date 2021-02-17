import React from "react";

const Header = (props) => {
  const { data } = props;

  return (
    <div className="header-cont">
      <div className="header">
        <span className="date">
          {data.date} {Date()}
        </span>
        <h1 className="Title"> NASA </h1>
        <span className="logo"> LOGO </span>
      </div>
    </div>
  );
};

export default Header;
