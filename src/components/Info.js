import React from 'react'



export default function Info(props) {
    const { dateInfo, explaination } = props
return (
    <div className='infoDiv'>
            <p>  Hello todays date is {dateInfo} </p>
            <p> {explaination} </p>
    </div>
)
}