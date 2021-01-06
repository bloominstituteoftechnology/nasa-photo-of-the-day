import React from 'react'

function Date(props){
    console.log(props)
    return(
        <h2>
            {props.data.date}
        </h2>
    )
}

export default Date