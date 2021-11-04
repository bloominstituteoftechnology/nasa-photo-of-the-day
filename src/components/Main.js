import React from "react";
import "../App.css";
import styled from "styled-components";

const StyledMain = styled.div`
    padding: 0% 10%;

    .main{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .main-content{
        padding: 4%;
        width:40%;
    }
    img{
        width: 60%;
        padding: 4% 0%;
    }
`;

function Main({ img,content,title }){
    return (
        <StyledMain>
            <div className = "main">
                <div className="main-content">
                        <h1>{title}</h1>
                        <p>{content}</p>
                </div>
                <img src = {img} alt =""/>
                

            </div>
          
        </StyledMain>
    )
}
export default Main;