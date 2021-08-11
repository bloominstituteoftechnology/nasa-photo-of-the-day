import React from 'react'

export default function Date(props) {
    const { date } = props;
    return (
        <h3 className='today-date'>Today: {date}</h3>
    )
}