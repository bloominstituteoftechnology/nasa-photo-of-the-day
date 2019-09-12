import React from 'react';

const NasaExplanation = props => {
    return (
        <>
            <h3>Photo Explanation: </h3>
            <p className="explanation">{props.explanation}</p>
        </>
    );
};

export default NasaExplanation;