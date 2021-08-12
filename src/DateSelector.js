import React, { useState, useEffect } from 'react'

import './DateSelector.css'

export default function DateSelector(props){ 
    const { setToday, setDate } = props

 return (
     <div className='date-selector-div'>
        <label>Want to see another date?</label>
            <input type='date' onChange={event => setDate(event.target.value)}></input>
        <button onClick={event => setToday(false)}>Go!</button>
     </div>
 )   
}