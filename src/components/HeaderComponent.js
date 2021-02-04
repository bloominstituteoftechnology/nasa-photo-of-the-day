import React from "react"
import styled from "styled-components"

const Header = styled.h1`
font-size:3rem;
color:red;
`

function HeaderComponent (){
 return (
     <>
     <div className = "head-container">
        <Header className = 'header'>NASA Photo of the Day</Header>
    </div>
    </>
 )
}

export default HeaderComponent