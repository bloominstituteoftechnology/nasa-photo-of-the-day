import React from 'react';

const NasaPotd = props => {
   
        return (
            <>
                <img className="nasa-photo" alt="NASA Potd" src={props.url} />
            </>
        );
};

export default NasaPotd;