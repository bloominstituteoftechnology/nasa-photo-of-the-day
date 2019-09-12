import React from 'react';

const NasaPotd = props => {
   
        return (
            <>
                <img className="nasa-photo" alt="NASA Picture of The Day" src={props.url} />
            </>
        );
};

export default NasaPotd;