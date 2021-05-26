import React, { useState } from 'react';

const DateDisplay = props => {
  
    const { date } = props;

    return (
        <div>
            <h2>
                {date}
            </h2>
        </div>
    )
}

export default DateDisplay;