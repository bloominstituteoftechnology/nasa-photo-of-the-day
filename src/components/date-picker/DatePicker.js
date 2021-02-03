import React from 'react';
import './DatePicker.css';

function DatePicker(props) {
    const {setSelectedDate} = props
    return (
        <div className="date-picker-wrapper">
            <label><span role="img" aria-label="rocket">🚀</span> Enter a date: </label>
            <input 
                type="date"
                onChange={(event) => setSelectedDate(event.target.value)}
                className="date-picker"
            ></input>
        </div>
    );
}

export default DatePicker;