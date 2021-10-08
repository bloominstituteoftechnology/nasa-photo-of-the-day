import React from 'react';

const Date = (props) => {
    const { date } = props

    return (
        <div>
            <p> {date} </p>
        </div>
    );
};

export default Date;