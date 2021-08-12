import React from "react";
import styled from "styled-components"

const StyledButton = styled.div `
button{
    width: 200px;
    padding: 10px 20px;
    margin: 50px auto;
    border:3px solid #0F044C;
    box-sizing: border-box;
    text-decoration:none;
    text-transform:uppercase;
    color:#0F044C;
    text-align:center;
    transition: all 0.15s;
    background-color: white;
    }
button:hover{
     color:#DDDDDD;
     border-color:#0F044C;
    background-color: #0F044C;
    }
button:active{
     color:#0F044C;
     border-color:#0F044C;
    background-color: #EEEEEE;
    }
`
const Buttons = (props) => {
   const { getRandomDate, setDate } = props;
   
   const clicked = () => {
       console.log(getRandomDate());
       setDate(getRandomDate());
   }

    return (
        <StyledButton>
            <button className="random-button" onClick={clicked}>Random Picture</button>
        </StyledButton>
    )
}

export default Buttons;