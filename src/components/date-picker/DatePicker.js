import React from 'react';
import './DatePicker.css';
import styled from 'styled-components';

const Label = styled.label`
    font-weight: 500;
`;

function DatePicker(props) {
    const {setSelectedDate} = props
    return (
        <div>
            <Label><span role="img" aria-label="rocket">🚀</span> Enter a date: </Label>
            <input 
                type="date"
                onChange={(event) => setSelectedDate(event.target.value)}
                className="date-picker"
            ></input>
        </div>
    );
}

export default DatePicker;