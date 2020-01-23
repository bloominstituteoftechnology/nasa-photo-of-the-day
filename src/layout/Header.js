import React from 'react';
import "../App.css";
import styled from "styled-components";
import {
    Spinner,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
    // import Reactstrap from '../components/ReactStrap';

const Header = (props) => {

    return (
      <DivStyled className="header-div">
      <h4>
          NASA Picture of the Day
      </h4>  
   
      <Navbar>
               <Nav>
                 <NavItem>
                   <NavLink href="#">About</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#">Register</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#">Sign In</NavLink>
                 </NavItem>
               </Nav>
            
           </Navbar>
           
       
         
   </DivStyled>
    )
}
export default Header;

const DivStyled = styled.div`
 background-image: url(https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_1280.jpg); 
 color:rgb(240, 226, 243);
 Navbar{
     display:flex;
     flex-direction:row;
 }
 a{text-decoration:none;
    color:rgb(240, 226, 243);

    &:hover{
    transform: scale(2);
  }
 }
`