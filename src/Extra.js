import React from 'react'
import styled from 'styled-components';

const StyleExtra = styled.div`
padding-left: 21.875rem
`
const StyleP = styled.div`
padding-left: 65px
`
const StyleP2 = styled.div`
padding-left: 100px
`

//export extra
const Extra = (props) =>{
    const { nasaExtra } = props

    return(
        <StyleExtra>
           <h2>{nasaExtra.title}</h2> 
           <StyleP>
           <p>copyright:{nasaExtra.copyright}</p>
           </StyleP>
           <StyleP2>
           <p>{nasaExtra.date}</p>
           </StyleP2>
        </StyleExtra>
    )
}
export default Extra