import React from "react";
import styled from 'styled-components';

const StyledDetails = styled.div`
    padding: 20px;
    background-color: grey;
    color: white;
`

function Calendar(props) {
    const { dateSelect } = props;

    return (
        <StyledDetails>
            <p>Select Another Days Photo</p>
            <input id='calendar' type='date' onChange={ (e) => {
                e.persist();
                dateSelect(e.target.value);
            } } />
        </StyledDetails>
    )
}

export default Calendar;