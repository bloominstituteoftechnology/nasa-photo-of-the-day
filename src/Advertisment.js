import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'
import { AdButton } from './App'

const AdDiv = styled.div`

    width: 250px;
    height: 300px;
    padding: 25px;
    margin: 20px;
    border: none;
    border-radius: 32px;
    background-color: cornsilk;
    text-align: left;
    

`;


function Ad() {
    return(
        <AdDiv>
            <h2>🚀</h2>
            <h3>
            Now Hiring Astronauts to Fly To Mars!
            </h3>
            <p>
            We are officially starting our expansion of the solar system. Be part of our early journeys!
            </p>
            <AdButton>More Information</AdButton>
      </AdDiv>
    )
}

export default Ad;