import React from "react";
import "../App.css";
import styled from 'styled-components';

const StyledNav = styled.div`
    padding: 0% 10%;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nav-item{
        display: flex;
        justify-content: center;
        padding: 3% 12%;
      
      }
      .nav-item a{
        padding: 2% 7%;
        text-decoration: none;
        width: 24%;
      }
`;

function Navbar(){
    return(
        <StyledNav>
            <div className="nav">
            <h1>NASA</h1>
            <div className="nav-item">
                <a href= "#">Product</a>
                <a href= "#">About</a>
                <a href= "#">Team</a>
                <a href= "#">Contact</a>

            </div>

        </div>
        </StyledNav>
        
    )
}
export default Navbar;