import React from 'react'



export default function Info(props) {
    const { dateInfo } = props
return (
    <div className='infoDiv'>
            <p>  Hello todays date is {dateInfo} </p>
    </div>
)
}