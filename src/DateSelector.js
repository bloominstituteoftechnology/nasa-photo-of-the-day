import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../src/constants/index'
import './DateSelector.css'

export default function DateSelector(){

 return (
     <div className='date-selector-div'>
        <label>Want to see another date?</label>
            <input type='date'></input>
        <button>Go!</button>
     </div>
 )   
}