import React from 'react';


const Footer = props => {

    const { explanation } = props;

    return (
        
            <div>
                <p>{explanation}</p>
            </div>
        
    )
}

export default Footer;