import React from 'react';

const NasaTitle = props => {
    return (
        <>
            <h1>NASA Photo of the Day</h1>
            <h2>{props.title}</h2>
        </>
    );
};

export default NasaTitle;