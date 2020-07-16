import React from 'react'



function Description(props){
    const { explanation, copy } = props
    return(
    <>
        <p> { explanation } </p>
        <span> { copy } </span>
    </>
    )
}

export default Description