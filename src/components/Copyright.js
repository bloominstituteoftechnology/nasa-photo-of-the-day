import React from 'react'

function Copyright(props){
    console.log(props)
    return(
        <p>
            {props.data.copyright}  
        </p>
    )
}

export default Copyright