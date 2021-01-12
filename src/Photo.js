import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Photo () {
    const[nasa, setNasa] = useState('')
    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
    .then(res => {
        console.log(res.data)
        setNasa(res.data)}) 
    .catch(err =>console.log(err))
    
    
    }, [])




    return (
       <div className='Photo'>
       <h1>Beautiful space</h1>
        <img src ={nasa.url} alt= 'space pic'/>

       </div>
    )
}

export default Photo 