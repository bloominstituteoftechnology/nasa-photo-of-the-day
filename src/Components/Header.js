import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.h1`
font-family: verdana;
font-size: 30px;
color:red;

&:hover{
color: black;
font-size:25px;

}
`




const Header = () => {
return(<StyledHeader>
        <h1>NASA Photo of the day </h1>
    </StyledHeader>) 
    
}

export default Header