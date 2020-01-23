import React from "react";

const Header = props => {
  return (
    <div>
      <div style={{ paddingTop: "1em" }}>
        <h3 style={{ fontSize: "2em" }}>
          <span>title:</span> {props.data.title}
        </h3>
        <p style={{ fontSize: "1.6em" }}>
          <span> explanation:</span> {props.data.explanation}
        </p>
        <p style={{ fontSize: "1.6em" }}>
          <span>date:</span> {props.data.date}
        </p>
        <p className="copy" style={{ paddingTop: "50em" }}>
          copyright: {props.data.copyright}
        </p>
      </div>
    </div>
  );
};

export default Header;
