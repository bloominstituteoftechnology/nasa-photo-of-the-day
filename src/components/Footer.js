import React, { useState, useEffect } from "react";

const Footer = (props) => {
    console.log(props);
  return (
    <div className="footerCard">
      <ul>
        {props.menuItems.map((item) => {
          return <li className= "fList"> <button className ="alienB"> {item}</button></li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
