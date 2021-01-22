import React from "react";

const Footer = ({ title, date }) => {
    return (
        <div>
            <h6>{title}, {date}</h6>
            <h6>ⓒ2021 Tasnim Alom </h6>
        </div>
    )
}
export default Footer;