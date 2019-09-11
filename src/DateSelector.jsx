import React from 'react';

function DateSelector (props) {
    return (
        <div className='date-selector'>
            <h3>Get an image from a different date!</h3>
            <input type="date"/>
            <button>Go!</button>
        </div>
    )
}

export default DateSelector