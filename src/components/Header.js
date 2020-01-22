import React from "react";

const Header = props => {
  return (
    <div>
      <div style={{ paddingTop: "1em" }}>
        <h3 style={{ fontSize: "2em" }}>title: {props.data.title}</h3>
        <p style={{ fontSize: "1.6em" }}>
          explanation: {props.data.explanation}
        </p>
        <p style={{ fontSize: "1.6em" }}>date: {props.data.date}</p>
        <p className="copy" style={{ paddingTop: "50em" }}>
          copyright: {props.data.copyright}
        </p>
      </div>
    </div>
  );
};

export default Header;
