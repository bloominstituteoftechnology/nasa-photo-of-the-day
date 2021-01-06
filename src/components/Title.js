import { render } from '@testing-library/react'
import React from 'react'
import Date from './Date'

function Title(props){
    console.log(props)
   
    return (
        <div className='title'>
            <Date />
            <h1>{props.data.title}</h1>
        </div>
    )
}

export default Title