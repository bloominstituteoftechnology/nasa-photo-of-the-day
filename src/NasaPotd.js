import React, { useState, useEffect } from "react"
import axios from 'axios'
import styled from 'styled-components';




export default function PhotoImport(props) {
    
const [copyright, setCopyright] = useState(null);
const [date, setDate] = useState(null);
const [explain, setExplain] = useState(null);
const [title, setTitle] = useState(null);
const [url, setUrl] = useState(null);

    
useEffect( () => {
    axios   
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        //DEMO_KEY
        .then(success => {
            setCopyright(success.data.copyright);
            setDate(success.data.date);
            setExplain(success.data.explanation);
            setTitle(success.data.title);
            setUrl(success.data.url);
        })

        .catch(fail => console.log('get fail', fail));

    },[])

//{explain}
    return (
        


    <div className = 'photo-info'>
        <PageContainer>
            <H1Style>Welcome to the NASA Photo of the day <span>🚀</span> [{date}]</H1Style>
            <H3Style>Title: "{title}"</H3Style>
            <ImgStyle src= {url} alt="nasa photo of the day" />
            <H3Style>Photo Credit: {copyright}</H3Style>
            <ParaStyle>{explain}</ParaStyle>
        

        <PageContainer2>
            <ButtonStyle className='nav-button'>Archives</ButtonStyle>
            <ButtonStyle className='nav-button'>Contact</ButtonStyle>
    </PageContainer2>
    </PageContainer> 
</div>

        
        )

    }

  

export const PageContainer = styled.div`

display: flex;
align-items: center;
padding: 15px;
margin-top: 0px;
margin-bottom: 100px;
justify-content: center;
flex-direction: column;
`

export const PageContainer2 = styled.div`

display: flex;
align-items: center;
padding: 10px;
width: 50%;
margin-top: 10px;
justify-content: center;
background-color: black;
`  


export const ParaStyle = styled.p`

display: flex;
justify-content: center;
font-weight: bold;
font-family: sans-serif;
color: black;
font-size: 20px;
margin-top: 15px;
padding: 10px;
width: 50%;
text-align: center;
`


export const ButtonStyle = styled.button`

margin-left: 60px;
color: white;
font-weight: bold;
background-color: #a400ffb3;
padding: 10px;
margin-top: 50px;
margin-bottom: 50px;
font-family: sans-serif;
border-radius: 10px;
&:hover {
    color: black;
    background-color: white;
    transform: rotate -1 deg;
}
`

export const ImgStyle = styled.img`
height: 500px;
width: 50%;
&:hover {
webkit-transform: scale(1.5);
transform: scale(1.5);
webkit-transition: .5s ease-in-out;
transition: .5s ease-in-out;
}
`

export const H1Style = styled.h1`

display: flex;
justify-content: space-between;
padding: 20px;
font-family: brush script mt (cursive);
align-items: center;
width: 50%;
color: black;
`

export const H3Style = styled.h3`

display: flex;
justify-content: center;
align-items: center;
background-color: black;
width: 50%;
color: white;
`