import App from './App';
import React, { useState,useEffect } from "react"
import axios from 'axios';
import styled from 'styled-components';


const StyledH1 = styled.div`
width: 100%;
height: 80%;
background-color: blue;
color:white;
border-bottom: 5px solid blue;
padding: 2%;
font-size: 3rem;



 `














export default function Header() {
    const [header, setHeader] = useState([])



useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=7YnANaDwNEdTS4uqUbwoDkDAcAHvtMIxYmL33f68`)
    .then(resp => {
        setHeader(resp.data)
    })

}, [])


return (
<StyledH1>{header.title}</StyledH1>
)


}














