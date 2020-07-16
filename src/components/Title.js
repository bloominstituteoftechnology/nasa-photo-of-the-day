import React from 'react'

function Title(props){
    const { title, date } = props
    return(
        <>
            <h1> {'title'} </h1>
            <h1> {'date'} </h1>
        </>
    )
}

export default Title