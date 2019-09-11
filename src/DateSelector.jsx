import React from 'react';

function DateSelector (props) {

    const today = new Date();

    const dd = ('0' + today.getDate()).slice(-2);
    const mm = ('0' + today.getMonth()).slice(-2);
    const yyyy = today.getFullYear();

    const dateToday = yyyy + '-' + mm + '-' + dd;

    return (
        <div className='date-selector'>
            <h3>Get an image from a different date!</h3>
            <input type="date" defaultValue={dateToday} />
            <button>Go!</button>
        </div>
    )
}

export default DateSelector