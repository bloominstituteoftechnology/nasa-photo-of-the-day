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
    a{
        text-decoration: none;
        color: white;
        margin-right: 25px
    }
`

const Search = (props) => {

    return (
        <StyledHeader>
            <header>
                <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png"/>
                <nav>
                    <input type="date" />
                </nav>
                <a href="">Random Picture</a>

            </header>
        </StyledHeader>
    )
}

export default Search;