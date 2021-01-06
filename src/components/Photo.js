import React from 'react'
import Copyright from './Copyright'

function Photo(props) {
    console.log(props)

    return (
        <div>
            <img src={props.data.photo} alt='Nasa Photo' />
            <Copyright />
        </div>
        
    )
}

export default Photo