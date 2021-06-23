import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TakeHo = styled.a`
font-size: 3rem;
justify-content: center;
padding: 10px;
`
export default function Navbar(){
    return(
        <div>
            <TakeHo>
                <Link to= "/">Take Me Home</Link> 
            </TakeHo>
        </div>
    )
}