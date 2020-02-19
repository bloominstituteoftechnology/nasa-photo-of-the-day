import React from "react";

const Footer = props => {
    return (
        <div className="footer-container">
            <div className="image-info">{props.data.explanation}</div>
            <a className="hd-url-link" href={props.data.hdurl}>High Resolution Image</a>
        </div>
    );
};

export default Footer;