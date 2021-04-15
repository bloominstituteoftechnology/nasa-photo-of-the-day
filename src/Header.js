import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components'



const StyledDiv = styled.nav`
display: flex;
    align-items: center;
    flex-direction: row; 
    justify-content: center;
    
    
`
const StyledA = styled.a`
color:black;
text-decoration: none;
padding:2% 4%; 
margin-right: .5%;
width: 100%;
text-align: center;

&:hover {
    color:#DAD9D9;
    background-color: #858181;
    transition: all 1s ease-in-out;
  }

`
const ParentDiv = styled.div`
text-align: center;
width:35%;
margin: auto;
// border:1px solid grey; 


`
const ImgTitle = styled.h2`
font-family: 'Architects Daughter', cursive;
font-size: 1.6rem;
padding:1% 0;
text-transform: uppercase;
`

export default function HeaderCreator(props){
    const {src} = props;
    const [imgTitle, setTitle] = useState('');
    useEffect(()=>{
        axios.get(src).then((res)=>{
            const titleTxt = res.data.title;
            setTitle(titleTxt);
        })
    },[])
    return (
    <> 
    
    <ParentDiv>
    <h1>NASA Picture of the Day! </h1>
    <StyledDiv>
        <StyledA href="#home">Home</StyledA>
        <StyledA href="#news">NASA</StyledA>
        <StyledA href="#about">About</StyledA>
    </StyledDiv>
    <ImgTitle>{imgTitle}</ImgTitle>
    </ParentDiv>
    </>
    )}