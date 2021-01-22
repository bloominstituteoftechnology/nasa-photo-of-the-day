import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
background-image: url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80");
min-height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(20px + 2vmin);
color: white;
text-shadow: goldenrod 2px 3px 4px;
`
 

const Header = ({ date }) => {
    
    return (
        <StyledDiv>      
            <h1>READY FOR LIFT OFF?</h1>
            <style>@import url('http://fonts.cdnfonts.com/css/space-age?styles=6701');</style>
                  <h2>{date}</h2>
        </StyledDiv>
        
    ) 
};

export default Header;