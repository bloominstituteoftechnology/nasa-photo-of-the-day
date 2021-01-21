import React from 'react';

export default function GetDate() {
    const dateToday = new Date();

    let date = dateToday.getFullYear() + '-' + (dateToday.getMonth()+1)
    + '-' + dateToday.getDate();

    return (
        
        <h1>
            NASA™ Photo of the Day: 
            <p>{date}</p>
        </h1>
        
        
    )
}