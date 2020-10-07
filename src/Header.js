import React from "react";
import styled from 'styled-components'

const HeaderStyle = styled.div`
.nav-bar{
    display: flex;
    width: 80%;
    justify-content: space-between;  
    align-items: center;
    margin: 0 auto;
}
.title {
    display: flex;
    width: 25%;
    font-size: 4rem;
    justify-content: center;
    align-self: center;
}
.navigation{
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 0.5%;
}
.navigation a{
    width: 30%;
    color: black;
    font-size: 2.7rem;
    text-decoration: none; 
}
.navigation a:hover{
    color: white;
    background-color:#7B7D7D;
    transform: scale(1.2);
    border-radius: 10px;
}
`
export default function Header (props) {

    return (
        <HeaderStyle>
            <nav>
                 <div class="nav-bar"> 
                    <div class="title">
                        <h2>NASA</h2>
                    </div>
                    <nav class="navigation">
                        <a href="#">Home </a>
                        <a href="#">About </a>
                        <a href="#">Project </a>
                    </nav>
                </div>
            </nav>
        </HeaderStyle>
        )
}