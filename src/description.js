import React, {useState, useEffect} from "react";
import styled from "styled-components";
const Desc = (props) => {
    const { desi } = props
    return (
        <StyledDesc>
    <div>
        <h2>Description</h2>
        <p>{desi}</p>
    </div>
    </StyledDesc>
    )
}

export default Desc;

const StyledDesc = styled.div`
    width: 90%;
    margin: 2% auto;

    h2{
        display:flex;
        justify-content:center;
        color: ${(pr) => (pr.theme.extraColor)};
        background-color: ${(pr) => (pr.theme.black)};
        font-family:Arial;
        font-weight:bold;
        border: 4px solid goldenrod;
        padding: 1% 2%;
        width: 6%;
        margin: 2% auto;
    }

    p{
    color: ${(pr) => (pr.theme.extraColor)};
    background-color: ${(pr) => (pr.theme.black)};
    padding: 1% 2%;
    border: 6px solid goldenrod;
    font-family:Arial;
    font-size:20px;
    line-height:40px;
    }
`

//submit