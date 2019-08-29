import React from 'react';
import { Alert } from 'reactstrap';

export default function Date (props) {
    return (
        <div className='date-display'>
            <Alert color='info'>Today is {props.date}!</Alert>
        </div>
    )
}