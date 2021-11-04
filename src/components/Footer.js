import React, { useState, useEffect } from "react";
import style from "./Footer.css";

const Footer = (props) => {
    console.log(props);
  return (
    <div className="footerCard">
      <ul>
        {props.menuItems.map((item) => {
          return <li className= "fList"> <button> {item}</button></li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
