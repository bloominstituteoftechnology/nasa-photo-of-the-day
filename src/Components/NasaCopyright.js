import React from 'react';

const NasaCopyright = props => {
    
    return (
        <>
            <p className="date">Photographer &copy;: {props.copyright}</p>
        </>
    );
};

export default NasaCopyright;