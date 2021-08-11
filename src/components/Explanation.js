import React from 'react'

export default function Explanation(props) {
    const { explanation } = props;
    return (
        <p className='explanation-section'>{explanation}</p>
    )
}