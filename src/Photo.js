import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
       <h1>A Photo of Mercury in Gatorade</h1>
        {nasa.url ? <Img src ={nasa.url} alt= 'space pic'/>: <p>..loading</p>}

       </div>
    )
}

const Img = styled.img`
width: 500px;
margin: 40px;

`

export default Photo 