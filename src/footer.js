import React from "react";

const Footer = props => {
    const { photo } = props

    return (
    <div className="footer">
        <h6>Copyright: {photo.copyright}</h6>
    </div>
    )
}

export default Footer;