import React from "react"
import "../../App.css"
import styled from "styled-components"


const HeaderBar = (props) => {

    const { data } = props;

    return(
        <StyledHeader>
            <HeaderItem> title {data.title} </HeaderItem>
            <HeaderItem> Astronomy Picture of the Day</HeaderItem>
            <HeaderItem> date {data.date} </HeaderItem>
        </StyledHeader>
    );
    
};



export default HeaderBar;

const StyledHeader = styled.div `
    background-color: #393B45;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1% 5%;

`
const HeaderItem = styled.div `
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: 3px 3px 5px #6E7889;
`