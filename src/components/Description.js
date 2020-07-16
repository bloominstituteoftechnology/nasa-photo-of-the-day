import React from 'react'
import { Header } from 'semantic-ui-react'



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