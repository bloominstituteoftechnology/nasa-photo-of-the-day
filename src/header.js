import React from "react";
import headerImg from "./logo192.png"; ///need to be imported from app.js in order for it to reder

export default function Header() {
  return (
    <div className="headerContainer">
      <img src={headerImg} alt="an atom"></img>
    </div>
  );
}
