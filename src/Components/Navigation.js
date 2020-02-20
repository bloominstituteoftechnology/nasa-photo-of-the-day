import React from 'react';
import {Nav,NavItem, NavLink} from 'reactstrap'
import styled from 'styled-components'

const Link = styled(NavLink)`
color: blue;
font-size: 1.2rem;
text-decoration: none;
margin: 2%;
padding-bottom: 2%;

`

const Navigation = () => {
    return (
  
        <Nav>
            <Link href='www.nasa.gov' color='danger'>Nasa</Link>
            <Link href='www.twitter.com/nasa'>Twitter</Link>
        </Nav>
         
       
        
    )
};

export default Navigation;