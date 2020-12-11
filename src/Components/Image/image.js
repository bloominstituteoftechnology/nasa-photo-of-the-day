import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Img = (props) => {

    const {apod} = props

    return (
        <StyledImg>
        <img alt="Nasa img of the day" src = {apod.url}></img>
        </StyledImg>
    )
}

export default Img

const StyledImg = styled.div`
background-color: black;
border: 4px solid goldenrod;
`