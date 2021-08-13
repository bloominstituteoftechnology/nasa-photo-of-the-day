import React from 'react'

export default function Picture(props) {
    const { picture } = props;
    return (
        <div className='imgContainer'>
            <img alt='Nasa picture of the day' src={picture}></img>
        </div>
    )
}