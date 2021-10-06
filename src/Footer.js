import React from 'react';

const Footer = (props) => {
    const { copyright } = props

    return (
        <div>
            <p> {copyright} </p>
        </div>
    );
};

export default Footer;