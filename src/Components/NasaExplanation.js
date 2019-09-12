import React from 'react';

const NasaExplanation = props => {
    return (
        <>
            <h4>Photo Explanation: </h4>
            <p className="explanation">{props.explanation}</p>
        </>
    );
};

export default NasaExplanation;