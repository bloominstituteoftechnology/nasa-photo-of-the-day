import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div `
    background-color: #0F044C;
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 100%;
    }
    input {
        margin-left: 300px
    }
    img {
        width: 100px;
        margin-left: 50px;
    }
    button{
        width: 200px;
        font-family: 'Anton';
        letter-spacing: 1.5px;
        padding: 10px 20px;
        margin: 0 auto;
        border: none;
        box-sizing: border-box;
        text-decoration:none;
        text-transform:uppercase;
        color:#EEEEEE;
        text-align:center;
        transition: all 0.15s;
        background-color: #0F044C;
        }
    button:hover{
        color:grey;
        border-color:#EEEEEE;
        
    button:active{
        color:#EEEEEE;
        border-color:#EEEEEE;
        background-color: #0F044C;
        }
`

const Search = (props) => {
    const { getRandomDate, setDate } = props;
   
    const clicked = () => {
        console.log(getRandomDate());
        setDate(getRandomDate());
    }

    return (
        <StyledHeader>
            <header>
                <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png"/>
                <nav>
                    <input type="date" />
                </nav>
                <button onClick={clicked}>Random Picture</button>

            </header>
        </StyledHeader>
    )
}

export default Search;