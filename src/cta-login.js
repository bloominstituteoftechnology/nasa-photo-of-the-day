import React from 'react'

export default function Buttons() {

const visitNasa = () => {
    const nasaUrl = 'https://www.nasa.gov/';
    window.open(nasaUrl);
}
    return(
        <div className='button-container'>
            <button onClick={visitNasa}className='nasa-website'>Visit NASA.gov</button>
        </div>
    )
}